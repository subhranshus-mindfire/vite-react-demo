
export function resetForm() {
  document.getElementById("applicationForm").reset();
  document.getElementById("update").classList.add("hidden");
  document.getElementById("submit").classList.remove("hidden");

  const jobType = document.getElementById("jobType").value;
  if (jobType === "remote") {
    document.getElementById("location").style.display = "none";
  } else {
    document.getElementById("location").style.display = "flex";
  }

  document.querySelectorAll(".text-danger").forEach(el => {
    if (!el.classList.contains("hidden")) {
      el.classList.add("hidden");
    }
  });
}
