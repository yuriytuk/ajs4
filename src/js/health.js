export default function colorGame (param) {
    if(param.health > 50) {
        return "healthy";
    }
    if (param.health <= 50 && param.health >= 15) {
        return "wounded";
    }
    if (param.health < 15) {
        return "critical";
    }
}