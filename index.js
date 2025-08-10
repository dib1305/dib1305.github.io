
    const profilePic = document.getElementById('profilePic');
    const fileInput = document.getElementById('fileInput');
    const randomBtn = document.getElementById('randomBtn');
    const resetBtn = document.getElementById('resetBtn');

    const originalSrc = profilePic.src;

    fileInput.addEventListener('change', e => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = ev => {
        profilePic.src = ev.target.result;
      };
      reader.readAsDataURL(file);
    });

    randomBtn.addEventListener('click', () => {
      // a small set of funny images you can replace or expand
      const pool = [
        '1.jpeg',
        '2.jpg',
        '3.jpeg',
        '4.jpeg'
      ];
      const pick = pool[Math.floor(Math.random() * pool.length)];
      profilePic.src = pick;
    });

    resetBtn.addEventListener('click', () => {
      profilePic.src = originalSrc;
      fileInput.value = '';
    });

    // optional: drag drop on avatar
    const avatarWrap = document.getElementById('avatarWrap');
    avatarWrap.addEventListener('dragover', e => { e.preventDefault(); });
    avatarWrap.addEventListener('drop', e => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = ev => { profilePic.src = ev.target.result; };
      reader.readAsDataURL(file);
    });