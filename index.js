const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// JSON Insurance Database (temporary)
let policies = [
    {
      policyId: "POL1001",
      holderName: "Shaaz Hussain",
      policyType: "Health",
      premium: 12000,
      duration: 1,
      active: true
    },
    {
      policyId: "POL1002",
      holderName: "Rahul Verma",
      policyType: "Life",
      premium: 18000,
      duration: 10,
      active: true
    },
    {
      policyId: "POL1003",
      holderName: "Ayesha Khan",
      policyType: "Vehicle",
      premium: 9500,
      duration: 3,
      active: false
    },
    {
      policyId: "POL1004",
      holderName: "Arjun Reddy",
      policyType: "Health",
      premium: 15000,
      duration: 2,
      active: true
    },
    {
      policyId: "POL1005",
      holderName: "Neha Sharma",
      policyType: "Life",
      premium: 22000,
      duration: 20,
      active: true
    },
    {
      policyId: "POL1006",
      holderName: "Vikram Singh",
      policyType: "Vehicle",
      premium: 8000,
      duration: 1,
      active: false
    }
  ];
  app.get("/policies", (req, res) => {
    res.json(policies);
  });
  
  // POST new policy
  app.post("/policies", (req, res) => {
    policies.push(req.body);
    res.status(201).json({ message: "Policy added" });
  });
  
  // GET single policy
  app.get("/policies/:id", (req, res) => {
    const policy = policies.find(p => p.policyId === req.params.id);
    res.json(policy);
  });
  
  // PUT update policy
  app.put("/policies/:id", (req, res) => {
    policies = policies.map(p =>
      p.policyId === req.params.id ? req.body : p
    );
    res.json({ message: "Policy updated" });
  });
  
  // DELETE policy
  app.delete("/policies/:id", (req, res) => {
    policies = policies.filter(p => p.policyId !== req.params.id);
    res.json({ message: "Policy deleted" });
  });
  
  // 🔴 THIS PART IS MANDATORY
  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`Insurance API running on port ${PORT}`);
  });
  
  