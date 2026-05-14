# Contributing to AI-Native Receptionist

First off, thank you for showing interest in the **@AI-Native-Architect** ecosystem. We aren't just building a project; we are defining the standards for **Integrated Context Systems**.

As this is a reference architecture for a high-level "System Walkthrough," we maintain a strict **Engineering Rigor** for all contributions.

## 🏗️ Our Architectural Principles
1. **Separation of Concerns:** Keep the LLM logic, the MCP server protocols, and the Voice/UI layers decoupled.
2. **Deterministic Security:** Every tool-use must be verified. We do not trust "Prompt-only" security.
3. **Latency is a Feature:** In voice agents, every millisecond counts. Optimize your logic for the edge.

## 🚦 Pull Request Process
We don't accept "quick fixes" to prompts. If you are proposing a change to an Agentic workflow:
- **Provide a Context Log:** Show the "Before" and "After" of the model's behavior.
- **Security Check:** Ensure your change does not introduce a Prompt Injection vector or PII leakage risk.
- **Style Consistency:** Match the modern, modular ES6+ / TypeScript standards used throughout the project.

## 🧪 Testing Prompts
If you are contributing to the `agents/` directory:
- Use **XML Delimiters** for all system instructions.
- Ensure all tool-calls are scoped via **MCP**.
- Include a brief `README.md` within the agent's folder explaining the **Latent Space** boundaries of that specific persona.

## 🤝 Code of Conduct
We are professionals building the future. Be direct, be technical, and stay focused on architectural integrity. 

---
*For high-level architectural consulting or enterprise inquiries, please refer to the contact details in the main README.*
