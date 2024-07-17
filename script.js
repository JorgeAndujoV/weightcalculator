function calculateDisks() {
    let totalweight = parseFloat(document.getElementById('totalweight').value);
    let intensity = parseFloat(document.getElementById('intensity').value);
    let maxWeight = ((((intensity / 100) * totalweight) - 45)) / 2;
    let disks = [];

    const diskWeights = [45, 35, 25, 10, 5, 2.5];

    for (let weight of diskWeights) {
        while (maxWeight >= weight) {
            disks.push(weight);
            maxWeight -= weight;
        }
    }

    let disksList = document.getElementById('disksList');
    disksList.innerHTML = '';
    disks.forEach(disk => {
        let li = document.createElement('li');
        li.textContent = disk;
        disksList.appendChild(li);
    });

    document.getElementById('remainder').textContent = `Remainder: ${maxWeight.toFixed(2)}`;
    document.getElementById('results').style.display = 'block';
}
