//---------update memory cost---------/////
function updateMemoryCost(isBaseMemory) {
    let extraMemoryCost = document.getElementById('extra-memory-cost').innerText;
    let totalMemoryCost = document.getElementById('extra-memory-cost');


    if (isBaseMemory == '8gb') {
        totalMemoryCost.innerText = 0;


    } else if (isBaseMemory == '16gb') {
        totalMemoryCost.innerText = 180;


    }
    return totalMemoryCost;

}
//---------update storage cost-----//
function updateStorageCost(isStorage) {
    let extraStorageCost = document.getElementById('extra-storage-cost').innerText;
    let totalStorageCost = document.getElementById('extra-storage-cost');

    if (isStorage == '256gb-storage') {
        totalStorageCost.innerText = 0;

    } else if (isStorage == '512gb-storage') {
        totalStorageCost.innerText = 100;
    } else if (isStorage == '1tb-storage') {
        totalStorageCost.innerText = 180;
    }
    return totalStorageCost;

}
//-------update delivery cost -----//

function updateDeliveryCost(isDeliveryCharge) {
    let deliveryCost = document.getElementById('extra-delivery-cost').innerText;
    let totalDeliveryCost = document.getElementById('extra-delivery-cost');

    if (isDeliveryCharge == 'without-charge') {
        totalDeliveryCost.innerText = 0;

    } else if (isDeliveryCharge == 'charge_cost') {
        totalDeliveryCost.innerText = 20;
    }

    return totalDeliveryCost;

}


//----calculate total cost-----///
function calculate(memory, storage, deliverycharge, code) {

    let memoryCost = updateMemoryCost(memory).innerText;
    const finalMemoryCost = parseInt(memoryCost);
    let storageCost = updateStorageCost(storage).innerText;
    const finalStorageCost = parseInt(storageCost);
    let deliveryCost = updateDeliveryCost(deliverycharge).innerText;
    const finaldeliveryCost = parseInt(deliveryCost);





    let currentBalance = document.getElementById('best-price').innerText;
    let totalBalance = document.getElementById('total-cost');
    totalBalance.innerText = finalMemoryCost + finalStorageCost + finaldeliveryCost + parseInt(currentBalance);

    ///----------------BONUS PART-------------///
    let displayCost = document.getElementById('displayCost');
    displayCost.innerText = totalBalance.innerText;

    code = document.getElementById('promoCode').value;
    if (code == 'stevekaku') {
        const PromoCost = (parseFloat(totalBalance.innerText) * .8);
        displayCost.innerText = PromoCost;

    }



}


//-----update memory cost ------//
document.getElementById('16gb-memory').addEventListener('click', function() {

    updateMemoryCost('16gb');

    calculate('16gb');


});
document.getElementById('8gb-memory').addEventListener('click', function() {

    updateMemoryCost('8gb');
    calculate('8gb');


});

//------------update Storage Cost ----------//
document.getElementById('256gb-ssd').addEventListener('click', function() {

    updateStorageCost('256gb-storage');
    calculate('256gb-storage');


});
document.getElementById('512gb-ssd').addEventListener('click', function() {

    updateStorageCost('512gb-storage');
    calculate('512gb-storage');


});
document.getElementById('1tb-ssd').addEventListener('click', function() {

    updateStorageCost('1tb-storage');
    calculate('1tb-storage');


});
//------update delivery cost------///
document.getElementById('without-delivery-charge').addEventListener('click', function() {

    updateDeliveryCost('without-charge');
    calculate('without-charge');


});
document.getElementById('delivery-charge').addEventListener('click', function() {

    updateDeliveryCost('charge_cost');
    calculate('charge_cost');


});

document.getElementById('entered_code').addEventListener('click', function() {

    calculate('stevekaku');
    document.getElementById('promoCode').value = '';
});