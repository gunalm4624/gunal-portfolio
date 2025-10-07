# EmailJS Template for Contact Form

## Template Subject
```
New Contact Form Submission from {{from_name}}
```

## Template Body (HTML)
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f8f9fa;
        }
        .container {
            background-color: white;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .header {
            border-bottom: 2px solid #e9ecef;
            padding-bottom: 20px;
            margin-bottom: 25px;
        }
        .header h1 {
            color: #212529;
            font-size: 24px;
            margin: 0;
            font-weight: 600;
        }
        .field {
            margin-bottom: 20px;
            padding: 15px;
            background-color: #f8f9fa;
            border-radius: 8px;
            border-left: 4px solid #007bff;
        }
        .field-label {
            font-weight: 600;
            color: #495057;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 5px;
        }
        .field-value {
            color: #212529;
            font-size: 16px;
            word-break: break-word;
        }
        .message-field {
            background-color: #e3f2fd;
            border-left-color: #2196f3;
        }
        .footer {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #e9ecef;
            font-size: 12px;
            color: #6c757d;
            text-align: center;
        }
        .highlight {
            background-color: #fff3cd;
            border: 1px solid #ffeaa7;
            padding: 10px;
            border-radius: 6px;
            margin: 15px 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🎨 New Portfolio Contact</h1>
        </div>
        
        <div class="highlight">
            <strong>📧 Contact Information</strong><br>
            You have received a new message through your portfolio contact form.
        </div>
        
        <div class="field">
            <div class="field-label">👤 Name</div>
            <div class="field-value">{{from_name}}</div>
        </div>
        
        <div class="field">
            <div class="field-label">📧 Email Address</div>
            <div class="field-value">
                <a href="mailto:{{from_email}}" style="color: #007bff; text-decoration: none;">{{from_email}}</a>
            </div>
        </div>
        
        {{#website}}
        <div class="field">
            <div class="field-label">🌐 Website</div>
            <div class="field-value">
                <a href="{{website}}" target="_blank" style="color: #007bff; text-decoration: none;">{{website}}</a>
            </div>
        </div>
        {{/website}}
        
        {{#service}}
        <div class="field">
            <div class="field-label">🛠️ Service Interested</div>
            <div class="field-value">{{service}}</div>
        </div>
        {{/service}}
        
        {{#budget}}
        <div class="field">
            <div class="field-label">💰 Project Budget</div>
            <div class="field-value">{{budget}}</div>
        </div>
        {{/budget}}
        
        <div class="field message-field">
            <div class="field-label">💬 Message</div>
            <div class="field-value" style="white-space: pre-wrap;">{{message}}</div>
        </div>
        
        <div class="footer">
            <p>
                <strong>📱 Quick Actions:</strong><br>
                <a href="mailto:{{from_email}}?subject=Re: Your Portfolio Inquiry" style="color: #007bff;">Reply to {{from_name}}</a> | 
                <a href="tel:+1234567890" style="color: #007bff;">Call Back</a>
            </p>
            <p>
                This message was sent from your portfolio contact form at {{timestamp}}<br>
                <em>Portfolio Contact System - Gunal M</em>
            </p>
        </div>
    </div>
</body>
</html>
```

## Template Body (Plain Text Alternative)
```
🎨 NEW PORTFOLIO CONTACT

📧 Contact Information
You have received a new message through your portfolio contact form.

👤 Name: {{from_name}}
📧 Email: {{from_email}}
{{#website}}🌐 Website: {{website}}{{/website}}
{{#service}}🛠️ Service: {{service}}{{/service}}
{{#budget}}💰 Budget: {{budget}}{{/budget}}

💬 Message:
{{message}}

---
📱 Quick Actions:
- Reply to: {{from_email}}
- Subject: Re: Your Portfolio Inquiry

This message was sent from your portfolio contact form.
Portfolio Contact System - Gunal M
```

## Template Variables Used
- `{{from_name}}` - User's name
- `{{from_email}}` - User's email address
- `{{website}}` - User's website URL (optional)
- `{{service}}` - Selected service type
- `{{budget}}` - Selected budget range
- `{{message}}` - User's message
- `{{to_name}}` - Your name (Gunal M)
- `{{timestamp}}` - When the message was sent

## Setup Instructions
1. Go to your EmailJS dashboard
2. Navigate to "Email Templates"
3. Click "Create New Template"
4. Copy the HTML template above into the template editor
5. Set the subject line as shown above
6. Save the template
7. Copy the Template ID for your environment variables

## Features
- ✅ Professional, branded design
- ✅ Mobile-responsive layout
- ✅ Conditional fields (only shows if data exists)
- ✅ Clickable email and website links
- ✅ Quick action buttons for replies
- ✅ Clean, modern styling
- ✅ Proper spacing and typography
