function newImage(url, left, bottom, isBackground){
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    object.style.background = isBackground
    return object

}

function newItem(url, left, bottom){
    let object = newImage(url, left, bottom)

    object.addEventListener('dblclick', () => {
        object.remove()
    })
}

newImage('assets/green-character.gif', 100, 100, 'false')
newImage('assets/tree.png', 200, 300, 'false')
newImage('assets/pillar.png', 350, 100, 'false')
newImage('assets/pine-tree.png', 450, 200, 'false')
newImage('assets/crate.png', 150, 200, 'false')
newImage('assets/well.png', 500, 425, 'false')

newItem('assets/sword.png', 500, 405, 'false')
newItem('assets/shield.png', 165, 185, 'false')
newItem('assets/staff.png', 600, 100, 'false')

 newItem('assets/grass.png',0,0, 'true')
 newItem('assets/grass.png',0,100, 'true')
 newItem('assets/grass.png',100,0,'true')
 newItem('assets/grass.png',100,100,'true')
 newItem('assets/grass.png',0,0, 'true')