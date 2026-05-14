/**
 * Agent A: The Gatekeeper
 * Responsibility: Sanitize input for Prompt Injection & Phishing patterns 
 * before passing it to the Primary Receptionist.
 */

export const sanitizeInput = async (transcript) => {
  const injectionPatterns = [/ignore previous instructions/i, /developer mode/i, /system_prompt/i];
  
  if (injectionPatterns.some(pattern => pattern.test(transcript))) {
    console.warn("Security Alert: Potential Prompt Injection Detected.");
    return { status: "REJECTED", reason: "Policy Violation" };
  }
  
  return { status: "CLEARED", data: transcript };
};
