export type MessageCategory = 'delivery' | 'billing' | 'technical' | 'general' | '-';

export type MessagePriority = 'low' | 'medium' | 'high' | '-';

export interface ProcessedMessage {
  category: MessageCategory;
  priority: MessagePriority;
  intent: string;
  confidence: number;
  extractedData: {
    orderNumber?: string;
    product?: string;
  };
  recommendedAction: string;
  response: string;
}
