# Rajdoot - Phone Messaging API
<img src="https://github.com/user-attachments/assets/0190f2f1-a092-45d4-983e-b990e5fecd60" />

## Overview
Rajdoot is a powerful SaaS platform that provides developers with a reliable phone messaging API. It allows users to send SMS messages, including OTPs for user validation, with ease. Developers can test the service for free and integrate it into their applications seamlessly.

## Features
- **SMS API**: Send text messages programmatically using our simple API.
- **OTP Service**: Generate and send OTPs for user authentication and validation.
- **Free Testing**: Developers can test the API without charges before deploying.
- **High Delivery Rate**: Ensures fast and reliable message delivery.
- **Scalability**: Suitable for small startups to large enterprises.

## Getting Started
1. **Sign Up**: Register for a free account on [Rajdoot](https://rajdoot.parminder.info).
2. **Get API Key**: Obtain your unique API key from the dashboard.
3. **Integrate API**: Use our API documentation to integrate Rajdoot into your application.
4. **Test for Free**: Try sending messages without charges for development and testing.
5. **Go Live**: Start using Rajdoot for production after testing.

## API Endpoints
### Send SMS
```http
POST /messages/send-message
```
#### Parameters:
| Parameter    | Type   | Description                     |
|--------------|--------|---------------------------------|
| `x-api-id`   | string | Your unique API id              |
| `x-api-key`  | string | Your unique API key             |
| `recipient`  | string | Recipient phone number          |
| `message`    | string | Text message to be sent         |

### Send OTP
```http
POST /messages/send-otp
```
#### Parameters:
| Parameter    | Type   | Description                    |
|--------------|--------|---------------------------------|
| `x-api-id`   | string | Your unique API id              |
| `x-api-key`  | string | Your unique API key             |
| `recipient`  | string | Recipient phone number          |
| `otp_length` | string | OTP length to be sent           |

### Verify OTP
```http
POST /messages/verify-otp
```
#### Parameters:
| Parameter    | Type   | Description                     |
|--------------|--------|---------------------------------|
| `x-api-id`   | string | Your unique API id              |
| `x-api-key`  | string | Your unique API key             |
| `recipient`  | string | Recipient phone number          |
| `otp`        | string | OTP Recived                     |

## Pricing
Rajdoot offers flexible pricing plans, including a free tier for testing. Contact us for custom enterprise solutions.

## Support
For any queries or technical assistance, reach out to our support team at [360.Parminder@gmail.com](mailto:360.parminder@gmail.com).

## License
Rajdoot is licensed under the MIT License.

---
Developed with ❤️ by Rajdoot Team

