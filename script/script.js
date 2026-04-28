const cards = document.querySelectorAll(".card");
const totalCount = document.getElementById("total-count");
const interviewCount = document.getElementById("interview-count");
const rejectedCount = document.getElementById("rejected-count");
const availableCount = document.getElementById("available-count");

const allSection = document.getElementById("allCards");


function toggleStyle(id) {
  // Get all three buttons
  const buttons = document.querySelectorAll(
    "#all-filter-btn, #interview-filter-btn, #rejected-filter-btn"
  );

  // Remove  style from all buttons
  for (const btn of buttons) {
    btn.classList.remove("bg-blue-500", "text-white");
    btn.classList.add("bg-white", "text-gray-500");
  }

  // Add  style to clicked button
  const selectedBtn = document.getElementById(id);
  selectedBtn.classList.remove("bg-white", "text-gray-500");
  selectedBtn.classList.add("bg-blue-500", "text-white");
}


let interview = 0;
let rejected = 0;

totalCount.innerText = cards.length;
availableCount.innerText = cards.length;
document.addEventListener("click", function (event) {

    let card = event.target;

    while (card && !card.classList.contains("card")) {
        card = card.parentElement;
    }

    if (!card) return;

    const statusSpan = card.querySelector(".status");

    // Interview button

    let interviewBtn = event.target;

    while (interviewBtn && !interviewBtn.classList.contains("interview-btn")) {
        interviewBtn = interviewBtn.parentElement;
    }

    if (interviewBtn) {

        if (statusSpan.innerText === "Interview") {
            statusSpan.innerText = "NOT APPLIED";
            statusSpan.classList = "status w-28 h-8 flex items-center text-xs font-medium bg-blue-100 text-blue-600 px-4 py-1 rounded-full";
            interview--;
        } else {
            if (statusSpan.innerText === "Rejected") {
                rejected--;
            }
            statusSpan.innerText = "Interview";
            statusSpan.classList = "status w-28 h-8 flex items-center text-xs font-medium bg-green-100 text-green-600 px-4 py-1 rounded-full";
            interview++;
        }

        updateCounts();
        return;
    }

    // Rejected button
    let rejectedBtn = event.target;

    while (rejectedBtn && !rejectedBtn.classList.contains("rejected-btn")) {
        rejectedBtn = rejectedBtn.parentElement;
    }

    if (rejectedBtn) {

        if (statusSpan.innerText === "Rejected") {
            statusSpan.innerText = "NOT APPLIED";
            statusSpan.classList = "status w-28 h-8 flex items-center text-xs font-medium bg-blue-100 text-blue-600 px-4 py-1 rounded-full";
            rejected--;
        } else {
            if (statusSpan.innerText === "Interview") {
                interview--;
            }
            statusSpan.innerText = "Rejected";
            statusSpan.classList = "status w-28 h-8 flex items-center text-xs font-medium bg-red-100 text-red-600 px-4 py-1 rounded-full";
            rejected++;
        }

        updateCounts();
        return;
    }

    // Delete button
    let deleteBtn = event.target;

    while (deleteBtn && !deleteBtn.classList.contains("delete-btn")) {
        deleteBtn = deleteBtn.parentElement;
    }

    if (deleteBtn) {

        if (statusSpan.innerText === "Interview") interview--;
        if (statusSpan.innerText === "Rejected") rejected--;

        card.remove();
        updateCounts();
    }

});

// Update counts
function updateCounts() {
    interviewCount.innerText = interview;
    rejectedCount.innerText = rejected;

    const currentCards = document.querySelectorAll(".card");
    totalCount.innerText = currentCards.length;
    availableCount.innerText = currentCards.length;
}

const allBtn = document.getElementById("all-filter-btn");
const interviewBtn = document.getElementById("interview-filter-btn");
const rejectedBtn = document.getElementById("rejected-filter-btn");

allBtn.addEventListener("click", function () {
    filterCards("all");
});

interviewBtn.addEventListener("click", function () {
    filterCards("Interview");
});

rejectedBtn.addEventListener("click", function () {
    filterCards("Rejected");
});

function filterCards(type) {

    const cards = document.querySelectorAll(".card");
    const emptyMessage = document.getElementById("empty-message");

    let visibleCount = 0;

    for(const card of cards) {
        const status = card.querySelector(".status").innerText;

        if (type === "all") {
            card.style.display = "";
            visibleCount++;
        } 
        else if (status === type) {
            card.style.display = "";
            visibleCount++;
        } 
        else {
            card.style.display = "none";
        }
    };

    availableCount.innerText = visibleCount;

    // Show / Hide empty message
    if (visibleCount === 0) {
        emptyMessage.classList.remove("hidden");
    } else {
        emptyMessage.classList.add("hidden");
    }

}

