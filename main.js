document.addEventListener("click",function (e){
    if(e.target.classList.contains("albume-item")){
          const src = e.target.getAttribute("src");
          document.querySelector(".modal-img").src = src;
          const myModal = new bootstrap.Modal(document.getElementById('albume-modal'));
          myModal.show();
    }
  })