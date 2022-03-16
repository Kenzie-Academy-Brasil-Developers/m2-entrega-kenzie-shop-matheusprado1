class app {

    static requisicao(){
  
      fetch('https://m2-kenzie-shop.herokuapp.com/products')
      .then(response => response.json())
      .then((data)=>{
  
      this.template(data)
            
        })
    }
  
    static template(data){   
      
      const body = document.querySelector('body')
      const div = document.querySelector('div')
      body.appendChild(div);
      
      data.products.forEach(elemento => {
          
          const divProdutos = document.createElement('div')
          divProdutos.classList.add('produtos')
          const img = document.createElement('img')
          const reviews = document.createElement('span')
          const p = document.createElement('p')
          const h2 = document.createElement('h2')
          const h3 = document.createElement('h3')
          const button = document.createElement('button')
  
      img.src = `https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo2/sprint3/img/consumindo-api-produtos/${elemento.id}/Image.png`
      p.textContent = elemento.productName
      button.textContent = 'COMPRAR'
  
      if (elemento.promotionStatus) {
          h3.textContent = `De: R$ ${elemento.price.productPrice}`
          h2.textContent = `Por: R$ ${elemento.price.productPromotionPrice}`
        } else {
          h2.textContent = `R$ ${elemento.price.productPrice}`
        }
  
        div.appendChild(divProdutos)
        divProdutos.appendChild(img)
        
        switch (elemento.reviews) {
          case 0: reviews.textContent = '☆☆☆☆☆'
            break
          case 1: reviews.textContent = '★☆☆☆☆'
            break
          case 2: reviews.textContent = '★★☆☆☆'
            break
          case 3: reviews.textContent = '★★★☆☆'
            break
          case 4: reviews.textContent = '★★★★☆'
            break
          case 5: reviews.textContent = '★★★★★'
            break
        }
        
        divProdutos.appendChild(reviews)
        divProdutos.appendChild(p)
        divProdutos.appendChild(h3)
        divProdutos.appendChild(h2)
        divProdutos.appendChild(button)
      })  
    }
  }
  app.requisicao()
  