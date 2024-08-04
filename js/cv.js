document.getElementById('cvButton').addEventListener('click',()=>{
    const link = document.createElement('a')
    link.href = '../assets/images/Shahroz Resume.pdf'
    link.download = '../assets/images/Shahroz Resume.pdf'
    link.click()
    document.body.removeChild(link)
})