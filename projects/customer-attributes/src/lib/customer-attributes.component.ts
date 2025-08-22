import { Component, OnInit, Input } from '@angular/core';

interface Customer {
  id: number;
  name: string;
  email: string;
  status: string;
  joinDate: Date;
  lastPurchase: number;
}

@Component({
  selector: 'lib-customer-attributes',
  templateUrl: './customer-attributes.component.html',
  styleUrls: ['./customer-attributes.component.scss'],
})
export class CustomerAttributesComponent implements OnInit {
  @Input() customers: Customer[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      status: 'Active',
      joinDate: new Date('2023-01-15'),
      lastPurchase: 299.99
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      status: 'Inactive',
      joinDate: new Date('2023-02-20'),
      lastPurchase: 199.50
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike@example.com',
      status: 'Active',
      joinDate: new Date('2023-03-10'),
      lastPurchase: 450.00
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getStatusClass(status: string): string {
    return status.toLowerCase() === 'active' ? 'status-active' : 'status-inactive';
  }
}
