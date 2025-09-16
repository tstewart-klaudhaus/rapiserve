/**
 * Bootstrap either a chat or realtime demo agent using the OpenAI framework.
 * Configured using API Key and RealtimeAgentConfiguration - compatible with both.
 */

import { Agent, type AgentConfiguration, type AgentInputItem, run, setDefaultOpenAIClient, user } from "@openai/agents"
import { OpenAI } from "openai"

let agent: Agent
let history: AgentInputItem[] = []

// WARNING: Not for production
// Enables direct creation of browser-based classic agent for eval/dev/test/demos etc.
export const setApiKey = (apiKey: string) => {
  setDefaultOpenAIClient(
    new OpenAI({
      apiKey: apiKey,
      dangerouslyAllowBrowser: true
    })
  )
}

export const initChat = async (config: AgentConfiguration) => {
  agent = new Agent(config)
}

export const say = async (message: string) => {
  history.push(user(message))
  const result = await run(agent, history)
  history = result.history

  return result.finalOutput || ""
}
