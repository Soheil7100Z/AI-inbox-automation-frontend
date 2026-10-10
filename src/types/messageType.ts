export interface ProcessedMessage {
  category: string;
  priority: string;
  intent: string;
  confidence: number;
  extractedData: {
    orderNumber?: string;
    product?: string;
  };
  recommendedAction: string;
  response: string;
}
