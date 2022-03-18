const qs = new URLSearchParams(window.location.search);

const setItems = (storage) => {
  storage.setItem("user", qs.get("user"));
  storage.setItem("city", qs.get("city"));
  storage.setItem("type", qs.get("type"));
};

if (qs.get("remember") === "true") setItems(localStorage);
else if (qs.get("remember") === "false") setItems(sessionStorage);
