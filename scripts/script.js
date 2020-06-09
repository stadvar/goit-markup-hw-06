//'use strict';
window.onload = () => {
  let bttns = document.querySelectorAll('.pnav__buton');
  let cards = document.querySelectorAll('.pcards__item');

  for (let i = 0; i < bttns.length; i++) {
    let Bdata = bttns[i].dataset.b;

    bttns[i].onclick = () => {
      for (let i = 0; i < cards.length; i++) {
        let Cdata = cards[i].dataset.c;

        if (Cdata == Bdata || Bdata == 'all') {
          //   //элемент.classList.toggle('класс');
          let aval = cards[i].classList.contains('hidden');

          if (aval) {
            cards[i].classList.remove('hidden');
          }
        } else {
          cards[i].classList.add('hidden');
        }
        // cards[i].classList.toggle('hidden');}
      }
    };
  }
  //---------------
  document.querySelector('.hero__button').onclick = () => {
    document.querySelector('.form__backdrop').classList.remove('is-hidden');
  };
  document.querySelector('.modal__button').onclick = () => {
    document.querySelector('.form__backdrop').classList.add('is-hidden');
  };
  //---------------
  // let Tags = document.querySelectorAll('.pcards__about');
  // let Txt = document.querySelectorAll('.pcards__text');

  // for (let i = 0; i < Txt.length; i++) {
  //   var Div = window.getComputedStyle(Tags[i]);
  //   let Dh = Math.round(parseFloat(Div.height));
  //   // console.log(Dh);
  //   var Text = window.getComputedStyle(Txt[i]);
  //   let Tm = parseFloat(Text.margin);
  //   let Th = Math.floor(parseFloat(Text.height));
  //   // console.log(Th);
  //   if (!Dh <= Th + Tm * 2) {
  //     //console.log('Вычисления нужны');
  //     let Calc = Math.round((Dh - Th) / 2);
  //     // console.log(Calc);
  //     Txt[i].style.marginTop = `${Calc}px`;
  //   } else {
  //     // console.log('Вычисления не нужны');
  //   }
  // }
  //----------------------------------------------
  // Напишите функцию camelize(str), которая преобразует строки вида
  // «my-short-string» в camelCase

  function camelize(str) {
    let arr = str.split('');
    arr.map((El, i) => {
      if (El == '-') {
        arr.splice(i, 1);
        arr[i] = arr[i].toUpperCase();
      }
    });
    return arr.join('');
  }
  //--------------------
  // let filtered = filterRange(arr, 1, 4);
  // alert(filtered); // 3,1 (совпадающие значения)
  // alert(arr); // 5,3,8,1 (без изменений)
  function filterRange(arr, a, b) {
    return arr.filter(El => {
      if ((El <= b && El >= a) || (El >= b && El <= a)) {
        return El;
      }
    });
  }
  //------
  function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
      if (!(a <= arr[i] && arr[i] <= b)) {
        arr.splice(i, 1);
      }
    }
    return arr;
  }
  //-----------------------
  // let arr = [5, 2, 1, -10, 8];

  // arr.sort(function (a, b) {
  //   return b - a;
  // });

  // alert(arr); // 8, 5, 2, 1, -10
  //------------------------------
  let arr = ['HTML', 'JavaScript', 'CSS'];
  function copySorted(arr) {
    return arr.slice().sort();
  }
}; //window.onload;
