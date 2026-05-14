# ADR 001: Selection of Model Context Protocol (MCP) for CRM Integration

## Context
Traditional REST-based wrappers for CRMs (Salesforce, HubSpot) create tight coupling and require the LLM to manage specific endpoint logic, leading to "context bloat" and security risks.

## Decision
We will utilize MCP (Model Context Protocol) to isolate the AI Receptionist from the raw data layer. 

## Consequences
- **Positive:** Standardized tool-calling, improved data scoping, and reduced prompt injection surface.
- **Negative:** Requires an intermediate MCP server deployment.
