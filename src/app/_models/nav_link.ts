export class SlideBarLink {
    constructor(public name: string, public url?: string, public icon?: string) {
    }
}

let menu = new Map<string, SlideBarLink[]>();

const adminHRMMenu = [
    new SlideBarLink('Dashboard', '',''),
    new SlideBarLink('Employee list', 'view-employee',''),
    new SlideBarLink('Add Employee','add-new-employee','')
];

const adminCarparkMenu = [
    new SlideBarLink('Dashboard','',''),
    new SlideBarLink('List Booking Office','booking-office-list',''),
    new SlideBarLink('Add Booking Office','add-booking-office',''),
]
menu.set("Admin_Hrm", adminHRMMenu);
menu.set("Admin_Carpark", adminCarparkMenu);

export default menu;