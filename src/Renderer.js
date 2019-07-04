
class Renderer {

    static renderPeople(people) {
        for (let p of people) {
            ellipse(p.position.x, p.position.y, 10, 10);
        }
    }

}