import { Zap, Star, Crown } from 'lucide-react';

export const CURRENT_PLAN = {
    name: "Pro Plan",
    price: "₹999",
    period: "month",
    features: [
        "10,000 messages per month",
        "Priority support",
        "Advanced analytics",
        "Custom templates",
        "API access"
    ],
    status: "active",
    renewalDate: "2024-05-15"
};

export const AVAILABLE_PLANS = [
    {
      _id: "67ebb87ca360a7916434faff",
      name: "Basic",
      price: "₹299",
      numericPrice: 299,
      period: "month",
      icon: "zap",
      color: "from-green-500 to-green-600",
      features: [
        // { text: "500 messages per month", _id: "67ebb87ca360a7916434fb00" },
        // { text: "Basic support", _id: "67ebb87ca360a7916434fb01" },
        // { text: "Email notifications", _id: "67ebb87ca360a7916434fb02" }
      ],
      recommended: false,
      isActive: true
    },
    {
      _id: "67ec2452a360a7916434fb0d",
      name: "Pro",
      price: "₹599",
      numericPrice: 599,
      period: "month",
      icon: "zap",
      color: "from-green-500 to-green-600",
      features: [
        // { text: "1500 messages per month", _id: "67ec2452a360a7916434fb0e" },
        // { text: "Basic support", _id: "67ec2452a360a7916434fb0f" },
        // { text: "Email notifications", _id: "67ec2452a360a7916434fb10" }
      ],
      recommended: true,
      isActive: true
    },
    {
      _id: "67ec25f8a360a7916434fb1a",
      name: "Enterprise",
      price: "Custom",
      numericPrice: 0,
      period: "",
      icon: "zap",
      color: "from-green-500 to-green-600",
      features: [
        // { text: "Unlimited messages", _id: "67ec25f8a360a7916434fb1b" },
        // { text: "Dedicated support", _id: "67ec25f8a360a7916434fb1c" },
        // { text: "Priority API access", _id: "67ec25f8a360a7916434fb1d" },
        // { text: "Custom integrations", _id: "67ec25f8a360a7916434fb1e" },
        // { text: "Dedicated support", _id: "67ec25f8a360a7916434fb1f" }
      ],
      recommended: false,
      isActive: true
    }
  ]; 