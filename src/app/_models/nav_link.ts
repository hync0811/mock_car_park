export class SlideBarLink {
    constructor(public name: string, public url?: string, public icon?: string) {
    }
}

let menu = new Map<string, SlideBarLink[]>();

const adminHRMMenu = [
    new SlideBarLink('Employee list', 'hrm/view-employee', ''),
    new SlideBarLink('Add Employee', 'hrm/add-employee', '')
];

const adminCarparkMenu = [
    new SlideBarLink('List Booking Office', 'cpa/booking-office/list', ''),
    new SlideBarLink('Add Booking Office', 'cpa/booking-office/add', ''),
    new SlideBarLink('List Car', 'cpa/car/list', ''),
    new SlideBarLink('Add car', 'cpa/car/add', ''),
    new SlideBarLink('List Parking-Lot', 'cpa/parking-lot/list', ''),
    new SlideBarLink('Add Parking-Lot', 'cpa/parking-lot/add', ''),
    new SlideBarLink('List Trip', 'cpa/trip/list', ''),
    new SlideBarLink('Add Trip', 'cpa/trip/add', ''),
    new SlideBarLink('List ticket', 'cpa/ticket/list', ''),
    new SlideBarLink('Add ticket', 'cpa/ticket/add', ''),
]
menu.set("Admin_Hrm", adminHRMMenu);
menu.set("Admin_Carpark", adminCarparkMenu);

export default menu;