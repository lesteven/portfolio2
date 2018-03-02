import React, { Component } from 'react';
import Chart from 'chart.js';


class Radar extends Component {
    componentDidMount() {
        let data = {
            labels: ['React', 'Redux','MongoDB', 'Ability to Learn',
                    'Express', 'Webpack'],
            datasets: [{
                label: 'Power Level',
                data: [8000,7000,6000,10000,7000,5000],
                backgroundColor: 'rgba(6,64,87,.2)',
                pointBackgroundColor:'rgba(6,64,84,1)',
                borderColor: 'rgba(179,181,198,1)',
                borderWidth:1
            }]
        }
        let options = {
            scale: {
                ticks: {
                    beginAtZero: true,
                    min:0,
                    max:10000,
                    stepSize:2500
                }
            }
        }
        if (typeof window !== 'undefined') {  
            const ctx = document.getElementById('chart');
            const radar = new Chart(ctx, {
                type: 'radar',
                data: data,
                options: options
            });
        }
    }
    render() {
        return (
            <canvas id='chart'>

            </canvas>
        )
    }
}


export default Radar;
