// Add the expenses to the database
export const AddAmount = async (newAmount) => {
  const apiUrl = import.meta.env.VITE_API_URL;
    try {
      const res = await fetch(`${apiUrl}/api/expenses`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newAmount),
      });
  
      if (!res.ok) {
        const error = await res.json();
        throw new Error(`Error: ${error.message || res.statusText}`);
      }
  
      const data = await res.json();
      return data;

    } catch (error) {
      console.error('Failed to add Expense:', error.message);
      throw error;
    }
};