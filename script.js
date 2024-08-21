
const home_dropdown_elem = document.querySelector('.home_dropdown');
const gallery_dropdown_elem = document.querySelector('.gallery_dropdown');
const star_dropdown_elem = document.querySelector('.star_dropdown');
const mask_dropdown_elem = document.querySelector('.mask_dropdown');
const compass_dropdown_elem = document.querySelector('.compass_dropdown');
const toolbox_dropdown_elem = document.querySelector('.toolbox_dropdown');
const wallet_dropdown_elem = document.querySelector('.wallet_dropdown');
const profile_dropdown_elem = document.querySelector('.profile_dropdown');
const download_dropdown_elem = document.querySelector('.download_dropdown');
const menu_dropdown_elem = document.querySelector('.menu_dropdown');
const home_icon = document.querySelector('.home');
const gallery_icon = document.querySelector('.gallery');
const star_icon = document.querySelector('.star');
const mask_icon = document.querySelector('.mask');
const compass_icon = document.querySelector('.compass');
const toolbox_icon = document.querySelector('.toolbox');
const wallet_icon = document.querySelector('.wallet');
const profile_icon = document.querySelector('.profile');
const download_icon = document.querySelector('.download');
const menu_icon = document.querySelector('.menu');
const drop_common = document.querySelector('.drop');


const dropdowns_array = [home_dropdown_elem, gallery_dropdown_elem, star_dropdown_elem, mask_dropdown_elem, compass_dropdown_elem, toolbox_dropdown_elem, wallet_dropdown_elem, profile_dropdown_elem, menu_dropdown_elem, download_dropdown_elem ];
const icons_array = [home_icon, gallery_icon, star_icon,mask_icon, compass_icon, toolbox_icon, wallet_icon, profile_icon, menu_icon,  download_icon];
    


console.log('type of = ', typeof icons_array[0]);

function toggleDropdown(icon, dropdown) {
    icon.addEventListener('click', (event) => {
        event.stopPropagation();
        // Toggle the display property
        if (dropdown.style.display === 'flex') {
            dropdown.style.display = 'none';
        } else {
            // Hide all other dropdowns before showing the clicked one
            dropdowns_array.forEach((dd) => {
                dd.style.display = 'none';
            });
            dropdown.style.display = 'flex';
        }
    });

    document.body.addEventListener('click', (e) =>{
        if (dropdown.style.display === 'flex' && ! dropdown.contains(e.target)) {
            dropdown.style.display = 'none';
        }   
    })
}


for (let i = 0; i < icons_array.length; i++) {
    let icon = icons_array[i];
    let dropdown = dropdowns_array[i];
    toggleDropdown(icon, dropdown);
}


const new_chart_elem = document.querySelector('#newChart')
const completed_chart_elem = document.querySelector('#completedChart')
const refunded_chart_elem = document.querySelector('#refundedChart')
const cancelled_chart_elem = document.querySelector('#cancelledChart')
const inner_graph_div = document.querySelector('.inner_graph')
const new_exp = document.querySelector('.new_example')
const completed_exp = document.querySelector('.completed_example')
const refunded_exp = document.querySelector('.refunded_example')
const cancelled_exp = document.querySelector('.cancelled_example')


// Initialize the chart variable
let currentChart;

// Chart data for each chart type
const chartData = {
    new: {
        label: 'New Orders',
        data: [2, 6, 20, 9, 16, 9, 5],
        borderColor: "#64b5f6",
        backgroundColor: "#c4e5ff5c",
    },
    completed: {
        label: 'Completed Orders',
        data: [0, 4, 9, 20, 16, 12, 20],
        borderColor: "#c5cae9",
        backgroundColor: "#c5cae95b",
    },
    refunded: {
    label: 'Refunded Orders',
    data: [0, 17, 7, 15, 4, 20, 8],
    borderColor: "#b2dfdb",
    backgroundColor: "#b2dfdb6c",
    },
    cancelled: {
     label: 'Cancelled Orders',
     data: [0, 0, 20, 4, 17, 16, 20],
     borderColor: "#b2ebf2",     
     backgroundColor: "#b2ebf267",
    },
};

// Function to create a new chart
function createChart(type) {
    const chartCanvas = document.getElementById('newChart');

    if (currentChart) {
        currentChart.destroy();
    }

    currentChart = new Chart(chartCanvas, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: chartData[type].label,
                data: chartData[type].data,
                backgroundColor: chartData[type].backgroundColor,
                borderColor: chartData[type].borderColor,
                borderColor: chartData[type].borderColor,
                borderWidth: 3,
                fill: true,
                pointBackgroundColor: chartData[type].borderColor,
                pointHoverBorderColor: chartData[type].borderColor,
                tension: 0.4,
            }]
        },
        options: {
            scales: {
             
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 2, // Add padding between the grid lines on the y-axis
                        
                    }
                }
            }
        }
    });
}

new_exp.addEventListener('click', () => createChart('new'));
completed_exp.addEventListener('click', () => createChart('completed'));
refunded_exp.addEventListener('click', () => createChart('refunded'));
cancelled_exp.addEventListener('click', () => createChart('cancelled'));

createChart('new');



const hidden_week_elem = document.querySelector('.hidden_weeks')
const week_btn_elem = document.querySelector('.week_btn')
const week_elem = document.querySelector('.week')
const week_elem1 = document.querySelector('.week1')
const week_elem2 = document.querySelector('.week2')

week_btn_elem.addEventListener('click', (event) =>{
    event.stopPropagation()
    week_btn_elem.style.boxShadow = '0px 0px 4px 1px #1689ff ';
    hidden_week_elem.style.display = 'flex'
    hidden_week_elem.style.flexDirection = 'column'
    hidden_week_elem.classList.toggle('active');


})

week_elem1.addEventListener('click', () =>{
    week_elem.innerText = week_elem1.innerText
    week_elem1.style.backgroundColor = '#cae6fc'
    week_elem2.style.backgroundColor = '#fff'
    
week_elem2.addEventListener('mouseover', () =>{
    if(!week_elem2.style.backgroundColor === '#cae6fc'){
         week_elem2.style.backgroundColor = '#e9ecef'
    }
   
})
week_elem2.addEventListener('mouseout', () =>{
    if(!week_elem2.style.backgroundColor === '#cae6fc'){
        week_elem2.style.backgroundColor = '#fff'
   }
})
  
})


week_elem2.addEventListener('click', () =>{
    week_elem.innerText = week_elem2.innerText
    week_elem2.style.backgroundColor = '#cae6fc'
    week_elem1.style.backgroundColor = '#fff'

    week_elem1.addEventListener('mouseover', () =>{
        if(!week_elem1.style.backgroundColor === '#cae6fc'){
             week_elem1.style.backgroundColor = '#e9ecef'
        }
       
    })
    week_elem1.addEventListener('mouseout', () =>{
        if(!week_elem1.style.backgroundColor === '#cae6fc'){
            week_elem1.style.backgroundColor = '#fff'
       }
    })

})


 
document.body.addEventListener('click',(e)=>{
    if (hidden_week_elem.style.display === 'flex' && ! hidden_week_elem.contains(e.target)) {
        hidden_week_elem.style.display = 'none';
    }  
})

const recent_table_div = document.querySelector('.recent_table1')
const recent_table_div2 = document.querySelector('.recent_table2')
const btn1 = document.querySelector('.number1')
const btn2 = document.querySelector('.number2')



btn2.addEventListener('click' , () => {
    
    recent_table_div2.style.display = 'inline-table'
        recent_table_div.style.display = 'none'
        btn2.style.backgroundColor = '#e3f2fd'
        btn1.style.backgroundColor = ''
  
})
btn1.addEventListener('click' , () => {
    recent_table_div2.style.display = 'none'
    btn1.style.backgroundColor = '#e3f2fd'
    btn2.style.backgroundColor = ''
    recent_table_div.style.display = 'inline-table'
});



var ctx = document.getElementById('myPieChart').getContext('2d');
var myPieChart = new Chart(ctx, {
    type: 'pie', // Specify the chart type
    data: {
        labels: ['Direct', 'Promoted', 'Affiliate'], // Add labels for your data
        datasets: [{
            label: 'My First Dataset',
            data: [40, 35, 25], // Add your data values
            backgroundColor: [
                '#38a6ff', // Colors for each slice
                '#4a62d9',
                '#2cbdaf'
            ],
            borderColor: [
                '#dee2e6',
                '#dee2e6',
                '#dee2e6'
            ],
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                enabled: true
            }
        }
    }
});



