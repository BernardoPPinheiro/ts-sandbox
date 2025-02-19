import { NextApiRequest, NextApiResponse } from "next";

// Mock exchange rates
const exchangeRates = {
  USD: { EUR: 0.92, GBP: 0.78 },
  EUR: { USD: 1.09, GBP: 0.85 },
  GBP: { USD: 1.28, EUR: 1.18 },
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { from, to, amount } = req.query;

  if (!from || !to || !amount) {
    return res.status(400).json({ error: "Missing parameters" });
  }

  const rate = exchangeRates[from as string]?.[to as string];

  if (!rate) {
    return res.status(400).json({ error: "Invalid currency pair" });
  }

  const convertedAmount = parseFloat(amount as string) * rate;
  res.json({ convertedAmount });
}
