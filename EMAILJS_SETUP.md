# EmailJS Setup Instructions

## 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/) and create an account
2. Verify your email address

## 2. Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Copy the Service ID

## 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact Form Submission from {{from_name}}

From: {{from_name}} ({{from_email}})
Website: {{website}}
Service Interested: {{service}}
Budget: {{budget}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template and copy the Template ID

## 4. Get Public Key
1. Go to "Account" → "General"
2. Copy your Public Key

## 5. Environment Variables
Create a `.env.local` file in your project root with:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

## 6. Test the Form
1. Start your development server: `npm run dev`
2. Navigate to `/contact-me`
3. Fill out and submit the form
4. Check your email for the message

## Template Variables Available
- `{{from_name}}` - User's name
- `{{from_email}}` - User's email
- `{{website}}` - User's website URL
- `{{service}}` - Selected service
- `{{budget}}` - Selected budget range
- `{{message}}` - User's message
- `{{to_name}}` - Your name (set to "Gunal M")
