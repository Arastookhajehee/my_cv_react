import cvData from "../assets/cv_data.js";
import CVEntry from "./CVEntry.jsx";

// Helper to group entries by category
const groupByCategory = (data) => {
    return data.reduce((acc, entry) => {
      if (!acc[entry.category]) acc[entry.category] = [];
      acc[entry.category].push(entry);
      // Sort the entries for this category by year (and month if needed)
      acc[entry.category].sort((a, b) => {
        if (b.year !== a.year) return b.year - a.year;
        return (b.month || 0) - (a.month || 0); // optional: sort by month if exists
      });
      return acc;
    }, {});
  };
  
  const CVSection = () => {
    const grouped = groupByCategory(cvData);
  
    return (
      <section className="p-4">
        {Object.entries(grouped).map(([category, entries]) => (
          <div key={category} className="mb-10">
            <h2 className="font-bold mb-3 py-3 border-bottom border-2">{category}</h2>
            {entries.map((entry, index) => (
              <CVEntry key={index} {...entry} />
            ))}
          </div>
        ))}
      </section>
    );
  };
  

export default CVSection;
