let ft_list = document.getElementById("ft_list");
const create = () => {
  let txt = prompt("Please Enter TODO LIST :");
  if (!txt || txt.trim() === "") return;
  const name = new Date().getTime();
  document.cookie = `${name}=${txt}`;
  let node = document.createElement("div");
  node.onclick = () => {
    const check = confirm("Do you want to delete");
    if (check) {
      node.remove();
      document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
  };
  node.innerHTML = txt;
  ft_list.prepend(node);
};

const check = document.cookie;
if (check.length > 0) {
     const cookie = check.split(";");
     cookie.forEach((element) => {
          const trimmed = element.trim(); 
          if (!trimmed) return;
          const parts = trimmed.split("=");
          const key = parts[0];
          const value = parts[1];
          
          if (!value || value === "null" || value === "undefined" || value.trim() === "") {
               return;
          }

          let node = document.createElement("div");
          node.onclick = () => {
               const check = confirm("Do you want to delete");
               if (check) {
                    node.remove();
                    document.cookie = key + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
               }
          };
    node.innerHTML = node.innerHTML = value;
    ft_list.prepend(node);
  });
}