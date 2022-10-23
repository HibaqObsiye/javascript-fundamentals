const cohort = {
    name: "james",
    id: 1234,
    students: ['layla','omar','regal','mohammed']
}

const information = () => {
    return `Cohort_id: <${cohort.id}> - Cohort_name:<${cohort.name}> - Cohort.length: <${cohort.students.length}>`

}
console.log(information(cohort))