let menuValue = null;

const employeeList = [{
  name: 'Jan',
  officeNum: 1,
  phoneNum: '222-222-2222'
},
{
  name: 'Juan',
  officeNum: 304,
  phoneNum: '489-789-8789'
},
{
  name: 'Margie',
  officeNum: 789,
  phoneNum: '789-789-7897'
},
{
  name: 'Sara',
  officeNum: 32,
  phoneNum: '222-789-4654'
},
{
  name: 'Tyrell',
  officeNum: 3,
  phoneNum: '566-621-0452'
},
{
  name: 'Tasha',
  officeNum: 213,
  phoneNum: '789-766-5675'
},
{
  name: 'Ty',
  officeNum: 211,
  phoneNum: '789-766-7865'
},
{
  name: 'Sarah',
  officeNum: 345,
  phoneNum: '222-789-5231'
}
];


// 1. Render `employeeList` individually in paragraph tags to the div with the class `divOutput` when VIEW option is selected.
const render = function () {

  // Before adding content, make sure our div is empty
  // We do this to make the render function re-usable.
  $('.divOutput').empty();

  for (let i = 0; i < employeeList.length; i++) {
    console.log(employeeList[i]);
    //  $('.divOutput').append(`<p>Name: ${employeeList[i].name}</p>
    //                         <p>Office Number: ${employeeList[i].officeNum}</p>
    //                     <p>Phone Number: ${employeeList[i].phoneNum}</p>`);

    $('.divOutput').append(`<textarea rows="4" cols="100"> 
                            Name: ${employeeList[i].name}
                            Number: ${employeeList[i].officeNum}
                            Phone Number: ${employeeList[i].phoneNum}
                            </textarea>`);
  }
}


//To get the value of menu option selected
function menuAction(ev) {
  ev.preventDefault();
  menuValue = ev.target.innerText;
  if (menuValue === 'VIEW') {
    render();
  };
  if (menuValue === 'DELETE') {
    $('.empOffnum').hide();
    $('.empPhnum').hide();
  };

  if (menuValue === 'VERIFY') {
    $('.empOffnum').hide();
    $('.empPhnum').hide();
  };
  if (menuValue === 'ADD' || menuValue === 'VIEW' || menuValue === 'UPDATE') {
    $('.empOffnum').show();
    $('.empPhnum').show();
  };
  if (menuValue === 'ADD') {
    //$('.fa fa-search').attr('class', 'fa-plus-square');

    $('.fa fa-search').toggleClass('.fa-plus-square');
  };
};

//Depending on menu option selected button will perform its action
const buttonAction = function () {
  //Add new entries to employeeList 
  if (menuValue === 'ADD') {

    //use the `val` function to get the value of the user input and and add that name to the list
    const valueName = $('.empName').val();
    const valueOffnum = $('.empOffnum').val();
    const valuePhnum = $('.empPhnum').val();
    //Push object into employeeList array 
    employeeList.push({
      name: valueName,
      officeNum: valueOffnum,
      phoneNum: valuePhnum
    });

    // After performing our actions, clear the name input and re-render the list
    $('.empName').val('');
    $('.empOffnum').val('');
    $('.empPhnum').val('');
    render();
  };
  //Update officeNum and phoneNum for the Name entered on page
  if (menuValue === 'UPDATE') {
    //Get the name, officenumber and phone number entered on page by the user
    const valueName = $('.empName').val();
    const valueOffnum = $('.empOffnum').val();
    const valuePhnum = $('.empPhnum').val();
    //console.log(valueOffnum);
    //console.log(valuePhnum);

    //find the index of the name value in  employeeList
    // Get the index of the name being replaced
    const callback = item => item.name == valueName;
    const nameIndex = employeeList.findIndex(callback);
    //console.log(nameIndex);
    // If that name is in our array, replace it with the new name
    if (nameIndex > -1) {
      employeeList.splice(nameIndex, 1, {
        name: valueName,
        officeNum: valueOffnum,
        phoneNum: valuePhnum
      });
    }
    // After performing our actions, clear the name input and re-render the list
    $('.empName').val('');
    $('.empOffnum').val('');
    $('.empPhnum').val('');
    render();
  };
  if (menuValue == 'DELETE') {

    const valueName = $('.empName').val();
    // Get the index of the name entered by user
    const callback = item => item.name == valueName;
    const nameIndex = employeeList.findIndex(callback);
    if (nameIndex > -1) {
      employeeList.splice(nameIndex, 1);
    };
    // After performing our actions, clear the name input and re-render the list
    $('.empName').val('');
    $('.empOffnum').val('');
    $('.empPhnum').val('');
    render();
  };
  if (menuValue == 'VERIFY') {
    const valueName = $('.empName').val();
    // Get the index of the name entered by user
    const callback = item => item.name == valueName;
    const nameIndex = employeeList.findIndex(callback);
    if (nameIndex > -1) {
      $('.divOutput').empty();
      $('.divOutput').text('Yes');
    }
    else {
      $('.divOutput').empty();
      $('.divOutput').text('No');
    };

  };
};
//Adding click event to all the menu options
$('.menu').on('click', menuAction);
//Adding click event to the button 
$('.empButton').on('click', buttonAction)


