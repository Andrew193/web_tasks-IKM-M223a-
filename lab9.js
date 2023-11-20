class Employee {
    constructor(position, salary) {
        this.position = position;
        this.salary = salary;
    }

    getPosition() {
        return this.position;
    }

    getSalary() {
        return this.salary;
    }

    accept(visitor) {
        visitor.visitEmployee(this);
    }
}

class Department {
    constructor(employees) {
        this.employees = employees;
    }

    getEmployees() {
        return this.employees;
    }

    accept(visitor) {
        visitor.visitDepartment(this);
    }
}

class Company {
    constructor(departments) {
        this.departments = departments;
    }

    getDepartments() {
        return this.departments;
    }

    accept(visitor) {
        visitor.visitCompany(this);
    }
}

class Visitor {
    visitCompany(company) {}
    visitDepartment(department) {}
    visitEmployee(employee) {}
}

class SalaryReportVisitor extends Visitor {
    constructor() {
        super();
        this.report = [];
    }

    visitCompany(company) {
        this.report.push("\nSalary report for the company: ");
        for (const department of company.getDepartments()) {
            this.report.push("\nSalary report for the department: ");
            for (const employee of department.getEmployees()) {
                this.report.push(`\nPosition: ${employee.getPosition()}, Salary: ${employee.getSalary()}`);
            }
        }
    }

    visitDepartment(department) {
        this.report.push("\nSalary report for the department: ");
        for (const employee of department.getEmployees()) {
            this.report.push(`\nPosition: ${employee.getPosition()}, Salary: ${employee.getSalary()}`);
        }
    }

    visitEmployee(employee) {
        this.report.push("\nSalary report for the employee: ");
        this.report.push(`\nPosition: ${employee.getPosition()}, Salary: ${employee.getSalary()}`);
    }

    getReport() {
        return this.report;
    }
}

const programmer = new Employee("Programmer", 5000);
const manager = new Employee("Manager", 3000);
const department1 = new Department([programmer, manager]);
const department2 = new Department([new Employee("Designer", 4000)]);
const company = new Company([department1, department2]);

const reportVisitor = new SalaryReportVisitor();

company.accept(reportVisitor);
const companyReport = reportVisitor.getReport();
console.log(companyReport.join(""));

const departmentReportVisitor = new SalaryReportVisitor();
department1.accept(departmentReportVisitor);
const departmentReport = departmentReportVisitor.getReport();
console.log(departmentReport.join(""));

const employeeReportVisitor = new SalaryReportVisitor();
programmer.accept(employeeReportVisitor);
const employeeReport = employeeReportVisitor.getReport();
console.log(employeeReport.join(""));
