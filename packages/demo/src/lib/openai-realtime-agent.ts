/**
 * Bootstrap either a chat or realtime demo agent using the OpenAI framework.
 * Configured using API Key and RealtimeAgentConfiguration - compatible with both.
 */

import { RealtimeAgent, type RealtimeAgentConfiguration, RealtimeSession } from "@openai/agents-realtime"
import type { RunContext } from "@openai/agents"

export let session: RealtimeSession

export const initVoice = async (config: RealtimeAgentConfiguration) => {
  // Get OpenAI realtime client key
  const fetchSession = await fetch("/api/session")
  const sessionKey = fetchSession.headers.get("rs-expiry")

  // Connect to audio I/O
  session = new RealtimeSession(new RealtimeAgent(config), {
    model: "gpt-4o-mini-realtime-preview-2024-12-17",
    config: {
      inputAudioTranscription: {
        model: "gpt-4o-mini-transcribe",
      }
    }
  })

  // Less chatty event
  // But only on audio, wouldn't cover text mode
  // RunContext includes keys:
  // `context.history` with the full histpry as per history_updated
  // usage: contains request and token counts - useful to monitor
  session.on("audio_stopped", (context: RunContext) => console.log("audio_stopped", context))

  // Very chatty event,
  // Content is an array of POJOS with keys:
  // content: array of (generally one) object with keys:
  //   type: audio / input_text /
  //   audio: (if type audio) always null
  //   transcript: (if type audio) with text
  //   text: (if type input_text)
  // itemId: text
  // previousItemId: text
  // role: assistant / user
  // status: completed / in_progress (stays in this staus for audio history)
  // type: message / function_call
  // arguments: (if type function_call) JSON of tool input
  // output: (if type function_call) JSON of tool output

  // NOTE: Need to add timestamp

  session.on("history_updated", (content) => console.log("History Updated", content))
  await session.connect({ apiKey: sessionKey! });
  session.sendMessage("Hi, please briefly introduce yourself and tell me what you can do for me.")
}
