// luxy���C�u�����̏�����
luxy.init();
// if(matchMedia('(min-width: 768px)').matches){
//   luxy.init();
//   } 
// title-h1�̎擾
const titleH1 = document.getElementById('title-h1')//h1��ID���擾
// const scrollValue = document.scrollingElement.scrollTop;//�X�N���[���ʂ�px�Ŏ擾�ł�����
const scrollDown = document.getElementById('scroll-down')//�X�N���[����class���擾

window.addEventListener('scroll',()=>{
  scroll_position = window.pageYOffset;//�c�̃X�N���[���ʒu���擾������
  // console.log(scroll_position);
  if (scroll_position >=300){//������ʍ��W��line��菬�����Ȃ�����Acss�֗v�f��ǉ�
    titleH1.style.animation = 'blure 3s ease-in-out forwards';
  }
  else {//300�ȉ��ɂȂ�����߂�
    titleH1.style.animation = 'blur 8s ease-in-out forwards';
  }
})

//�X�N���[���ʒu�ɂ����scrolldwun����������߂����肷�鏈��
window.addEventListener('scroll',()=>{
  scroll_position = window.pageYOffset;
  console.log(scroll_position);
  if(scroll_position >= 5300){
    scrollDown.style.display = 'none';
  }
  else{
    scrollDown.style.display = 'inline';
  }
})
