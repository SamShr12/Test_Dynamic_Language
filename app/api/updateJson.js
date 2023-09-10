export default async (req, res) => {
  if (req.method === "POST") {
    try {
      const newData = req.body;
      // Assuming you send the updated JSON data in the request body
      await fetch("/messages/em.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData), // Send the modified JSON data
      });

      res.status(200).json({ message: "Data updated successfully" });
    } catch (error) {
      console.error("Error updating data:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" }); // Respond with an error for unsupported methods
  }
};
