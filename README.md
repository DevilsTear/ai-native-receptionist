# Secure Omnichannel AI Receptionist: Enterprise Reference Architecture

[![AI-Native Architect Video](https://img.shields.io/badge/YouTube-Watch_the_Breakdown-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](YOUR_YOUTUBE_VIDEO_LINK)
[![Status](https://img.shields.io/badge/Status-Reference_Implementation-blue?style=flat-square)]()
[![Security](https://img.shields.io/badge/Security-Defense_In_Depth-green?style=flat-square)]()

**A production-ready reference architecture for an autonomous, omnichannel (Voice & Text) AI Receptionist, demonstrating advanced prompt injection defense, secure Model Context Protocol (MCP) integrations, and stateful orchestration.**

> *“We aren't building wrappers anymore. We are building Integrated Context Systems.”* — [@AI-Native-Architect](https://www.youtube.com/@AI-Native-Architect)

---

## 📖 Overview

Most AI voice agents are built as fragile wrappers around a single system prompt, making them highly vulnerable to injection attacks, social engineering, and data exfiltration.

This repository serves as the technical companion to the **"Hardening the Edge: Anti-Breach Architectures"** video series. It demonstrates a **Zero-Trust, Multi-Agent Architecture** utilizing an abstraction layer to orchestrate voice providers (e.g., Vapi, Retell, ElevenLabs) while maintaining strict isolation between the language model and the enterprise CRM.

### Key Capabilities Demonstrated

*   **Omnichannel Orchestration:** Handling both real-time voice streams and asynchronous text/SMS inputs through a unified intent engine.
*   **The Dual-LLM Shield:** Implementing a lightweight, high-speed "Gatekeeper" LLM to sanitize inputs before they reach the primary reasoning agent.
*   **Secure MCP Integration:** Decoupling the AI from direct database access using the Model Context Protocol (MCP) to enforce strict, user-scoped permissions.
*   **Dynamic UI Generation:** Real-time generation of single-use booking widgets or landing pages based on call context.

---

## 🏗️ System Architecture

*As discussed on the channel, we adhere to a **"simple scales, fancy fails"** philosophy. The core backend relies on a configuration-driven, headless architecture leveraging Next.js, Go, PostgreSQL, and Redis.*

### The Defense-in-Depth Pipeline

This project implements a multi-layered security model to address OWASP Top 10 vulnerabilities for LLM Applications (specifically LLM01: Prompt Injection and LLM06: Sensitive Information Disclosure).

1.  **Platform Perimeter (Google AI Studio):** Native safety settings configured to filter harassment, hate speech, and dangerous content before custom logic execution.
2.  **Input Sanitization (Gatekeeper Agent):** A fast evaluation model that scans incoming transcripts for adversarial patterns (e.g., role emulation, command overrides).
3.  **Stateful Orchestration (LangGraph):** Managing the conversation state, preventing the LLM from making unauthorized context switches or retaining sensitive PII across sessions.
4.  **Protocol Level (MCP Servers):** External tools and data retrieval (RAG) are executed via isolated MCP servers, ensuring the AI never possesses raw database credentials.

---

## 🚀 Getting Started

*(Note: This is a reference architecture. Before deploying to production, review the Security Considerations section.)*

### Prerequisites

*   Node.js (v20+) or Go (1.21+) for backend services.
*   A Google Gemini API Key (for the core reasoning engine).
*   Keys for your chosen Voice Provider (Vapi / Retell / ElevenLabs).
*   A running PostgreSQL instance and Redis (for state management).

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/DevilsTear/ai-receptionist-architecture.git](https://github.com/DevilsTear/ai-receptionist-architecture.git)
    cd ai-receptionist-architecture
    ```

2.  **Configure Environment Variables:**
    Copy the template and add your credentials.
    ```bash
    cp .env.example .env
    ```
    *Ensure you configure the `SAFETY_THRESHOLD` variables according to your risk tolerance.*

3.  **Initialize the MCP Servers:**
    Review the `./mcp-servers` directory to configure the CRM connection strings.

4.  **Start the Orchestrator:**
    ```bash
    # (Provide the specific start command based on your chosen stack, e.g., npm run dev or go run main.go)
    ```

---

## 🛡️ Security Considerations & OWASP Mapping

This architecture specifically addresses the following threats:

### LLM01: Prompt Injection (Direct & Indirect)
*   **Mitigation:** The Dual-LLM Shield pattern intercepts both direct caller commands ("ignore previous instructions") and indirect injections hidden in retrieved CRM data before the primary agent processes the context.

### LLM06: Sensitive Information Disclosure
*   **Mitigation:** The AI does not have direct access to the database. It requests data via the MCP server, which enforces authorization checks based on the *caller's* verified identity (Out-of-Band verification), not the AI's permissions.

### LLM09: Overreliance (Unauthorized Actions)
*   **Mitigation:** High-impact actions (e.g., database mutations, payment processing) require an explicit "Human-on-the-loop" approval threshold or cryptographic multi-factor handshake, preventing the AI from executing actions based solely on an unverified voice command.

---

## 📁 Repository Structure
```text
├── /orchestrator         # Main LangGraph / Intent routing logic
├── /agents               
│   ├── gatekeeper        # Input sanitization and prompt injection defense
│   ├── receptionist      # Core conversational logic and tone management
│   └── web-gen           # Dynamic UI/Component generation agent
├── /mcp-servers          # Isolated Model Context Protocol implementations
│   └── crm-connector     # Example CRM integration logic
├── /voice-bridge         # Abstraction layer for Vapi/Retell/ElevenLabs
├── /docs                 
│   ├── ADRs              # Architectural Decision Records
│   └── threat-model.md   # Detailed security analysis
└── docker-compose.yml    # Local development environment
```

---

## 🤝 Contributing

We welcome discussions and contributions regarding architectural patterns, security hardening, and MCP implementations. Please review our [Contribution Guidelines](CONTRIBUTING.md) and ensure all pull requests include updated tests for prompt injection resilience.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
