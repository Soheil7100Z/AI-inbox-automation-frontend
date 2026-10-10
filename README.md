# AI Inbox Automation – Frontend

A React and TypeScript frontend for an AI-powered inbox automation workflow.

The application allows users to submit an incoming message and receive an AI-generated analysis, including message classification, extracted information, priority, recommended action, and a suggested response.

## Features

- Single-page interface for processing incoming messages
- AI-generated message classification
- Intent and information extraction
- Priority detection
- AI confidence indication
- Recommended next action
- Generated response preview
- Responsive UI

## Tech Stack

- React
- TypeScript
- Vite
- CSS
- REST API

## Workflow

```text
Incoming Message
       ↓
React Frontend
       ↓
Node.js API
       ↓
AI Analysis
       ↓
Structured Result
       ↓
React UI
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will be available at the local development URL provided by Vite.

## Backend

This frontend communicates with the separate Node.js backend:

`AI-inbox-automation-backend`

The backend is responsible for AI processing, structured output, validation, and automation logic.

### Example Input

You can use the following sample customer message to test the AI analysis:

```text
Guten Tag,

ich habe vor zwei Wochen Kopfhörer bestellt, aber meine Bestellung ist noch nicht angekommen. Meine Bestellnummer lautet 48392.

Könnten Sie bitte den Lieferstatus überprüfen?

Vielen Dank.
```

## Purpose

This project was created to demonstrate practical AI integration and automation using a modern React and TypeScript frontend rather than building a large application.

## Status

🚧 In development
