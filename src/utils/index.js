export const getRandomColor = count => {
    let colors = [];
    for (let i = 0; i < count; i++) {
      let letters = '0123456789ABCDEF'.split('');
      let color = '#';
      for (let x = 0; x < 6; x++) color += letters[Math.floor(Math.random() * 16)];
      colors.push(color);
    }
    return colors;
  }

  export const repeatCounterElement = list => {
    const postByUserIdCounter = {}
    list.forEach(el => (postByUserIdCounter[el.userId] = postByUserIdCounter[el.userId] + 1 || 1))
    return Object.values(postByUserIdCounter)
  }