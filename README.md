# 🛒 React Webshop

A modern **React webshop interface** showcasing a scalable and performant **multi-filtering system** using real-world UI patterns.

---

## 🔗 Live Demo

[![Live Demo](https://img.shields.io/badge/Live%20Demo-React%20Webshop-0A66C2?style=for-the-badge&logo=github)](https://nimbostratue-ger.github.io/react-webshop/)

---

## 📸 Preview

*Add a screenshot or GIF here (you can drag & drop into GitHub README)*

---

## 🚀 Features

* 🔍 Search products (case-insensitive, trimmed input)
* 🏷️ Filter by category
* 💰 Filter by price range
* 🎨 Filter by color
* ⚡ Optimized rendering with `useMemo`
* 🧩 Modular component structure
* 📱 Responsive layout

---

## 🧠 How It Works

All filters are stored in a single state object and applied together in one filtering function.

```js id="wz3k2n"
const [filters, setFilters] = useState({
  query: '',
  category: '',
  price: '',
  color: ''
});
```

Filtering logic:

```js id="kq9r2b"
const filteredData = useMemo(() => {
  return data.filter(item => {
    const matchQuery =
      filters.query === '' ||
      item.title.toLowerCase().includes(filters.query.trim().toLowerCase());

    const matchCategory =
      filters.category === '' ||
      item.category === filters.category;

    const matchColor =
      filters.color === '' ||
      item.color === filters.color;

    const itemPrice = Number(item.newPrice);
    const matchPrice =
      filters.price === '' ||
      (filters.price === "$0-50" && itemPrice <= 50) ||
      (filters.price === "$50 - $100" && itemPrice >= 50 && itemPrice <= 100) ||
      (filters.price === "$100 - $150" && itemPrice >= 100 && itemPrice <= 150) ||
      (filters.price === "Over $150" && itemPrice > 150);

    return matchQuery && matchCategory && matchPrice && matchColor;
  });
}, [data, filters]);
```

---

## 🛠️ Tech Stack

* **React**
* **JavaScript (ES6+)**
* **CSS**

---

## ⚙️ Installation

```bash id="o1x3mf"
git clone https://github.com/your-username/react-webshop.git
cd react-webshop
npm install
npm run dev
```

---

## 📌 Usage

* Use the search bar to filter by product name
* Select category, price, or color
* Combine filters to narrow results

---

## 💡 Future Improvements

* Sorting (price, rating)
* Pagination / infinite scrolling
* Backend integration (API)
* Cart & checkout system
* Animations / improved UX

---

## 📄 License

This project is for educational purposes.

---

## 👨‍💻 Author

Built to demonstrate:

* State management in React
* Efficient filtering logic
* Clean component architecture

---
