var database = {
	'R001': {
		name: "Alice Smith",
		address: "1234 Elm Street, Springfield, IL 62704",
		phone: "555-555-1111",
		email: "alice.smith@example.com",
		recipient: "Bob Johnson",
		orderHistory: {
			'OH1': {
				itemName: "Product X",
				tranDate: "2020-02-01",
				amount: "$99.95"
			},
			'OH2': {
				itemName: "Product P",
				tranDate: "2021-01-01",
				amount: "$39.95"
			},
			'OH3': {
				itemName: "Product X",
				tranDate: "2022-03-15",
				amount: "$49.99"
			},
			'OH4': {
				itemName: "Service Y",
				tranDate: "2022-07-22",
				amount: "$79.99"
			},
			'OH5': {
				itemName: "Accessory Z",
				tranDate: "2023-05-10",
				amount: "$19.99"
			}
		}
	},
	'R002': {
		name: "John Doe",
		address: "5678 Oak Avenue, Chicago, IL 60601",
		phone: "555-555-3333",
		email: "john.doe@example.com",
		recipient: "Jane Brown",
		orderHistory: {
			'OH1': {
				itemName: "Product A",
				tranDate: "2022-09-20",
				amount: "$29.99"
			},
			'OH2': {
				itemName: "Service B",
				tranDate: "2023-01-05",
				amount: "$59.99"
			},
			'OH3': {
				itemName: "Accessory C",
				tranDate: "2023-04-12",
				amount: "$14.99"
			}
		}
	},
	'R003': {
		name: "Emily Williams",
		address: "7890 Maple Drive, New York, NY 10001",
		phone: "555-555-5555",
		email: "emily.williams@example.com",
		recipient: "David Wilson",
		orderHistory: {
			'OH1': {
				itemName: "Product P",
				tranDate: "2022-08-10",
				amount: "$39.99"
			}
		}
	},
	'R004': {
		name: "Michael Chen",
		address: "4321 Cedar Road, San Francisco, CA 94101",
		phone: "555-555-7777",
		email: "michael.chen@example.com",
		recipient: "Sophia Lee",
		orderHistory: {
			'OH1': {
				itemName: "Product Q",
				tranDate: "2022-06-25",
				amount: "$89.99"
			},
			'OH2': {
				itemName: "Service R",
				tranDate: "2022-12-18",
				amount: "$69.99"
			},
			'OH3': {
				itemName: "Accessory S",
				tranDate: "2023-03-08",
				amount: "$24.99"
			},
			'OH4': {
				itemName: "Product T",
				tranDate: "2023-05-27",
				amount: "$59.99"
			}
		}
	},
	'R005': {
		name: "Olivia Martinez",
		address: "8765 Birch Lane, Los Angeles, CA 90001",
		phone: "555-555-9999",
		email: "olivia.martinez@example.com",
		recipient: "Daniel Kim",
		orderHistory: {
			'OH1': {
				itemName: "Product U",
				tranDate: "2022-11-05",
				amount: "$19.99"
			},
			'OH2': {
				itemName: "Service V",
				tranDate: "2023-02-18",
				amount: "$49.99"
			},
			'OH3': {
				itemName: "Accessory W",
				tranDate: "2023-06-02",
				amount: "$9.99"
			},
			'OH4': {
				itemName: "Product X",
				tranDate: "2023-06-03",
				amount: "$49.99"
			},
			'OH5': {
				itemName: "Service Y",
				tranDate: "2023-06-04",
				amount: "$79.99"
			}
		}
	},
	'5555551111': {
		name: "Alice Smith",
		address: "1234 Elm Street, Springfield, IL 62704",
		customerID: "R001",
		email: "alice.smith@example.com",
		phone: "555-555-1111",
		recipient: "Bob Johnson",
		orderHistory: {
			'OH1': {
				itemName: "Ultimate Virus Protection",
				tranDate: "2020-02-01",
				amount: "$99.95"
			},
			'OH2': {
				itemName: "Family Protect+",
				tranDate: "2021-01-01",
				amount: "$39.95"
			},
			'OH3': {
				itemName: "Product M",
				tranDate: "2022-02-15",
				amount: "$59.99"
			}
		}
	},
	'5555553333': {
		name: "John Doe",
		address: "5678 Oak Avenue, Chicago, IL 60601",
		customerID: "R002",
		email: "john.doe@example.com",
		phone: "555-555-3333",
		recipient: "Jane Brown",
		orderHistory: {
			'OH1': {
				itemName: "Product B",
				tranDate: "2022-10-10",
				amount: "$49.99"
			},
			'OH2': {
				itemName: "Service C",
				tranDate: "2023-01-25",
				amount: "$69.99"
			}
		}
	},
	'5555555555': {
		name: "Emily Williams",
		address: "7890 Maple Drive, New York, NY 10001",
		customerID: "R003",
		email: "emily.williams@example.com",
		phone: "555-555-5555",
		recipient: "David Wilson",
		orderHistory: {
			'OH1': {
				itemName: "Product D",
				tranDate: "2022-07-05",
				amount: "$29.99"
			},
			'OH2': {
				itemName: "Service E",
				tranDate: "2023-02-20",
				amount: "$59.99"
			},
			'OH3': {
				itemName: "Accessory F",
				tranDate: "2023-05-12",
				amount: "$14.99"
			},
			'OH4': {
				itemName: "Product G",
				tranDate: "2023-06-01",
				amount: "$49.99"
			},
			'OH5': {
				itemName: "Service H",
				tranDate: "2023-06-03",
				amount: "$79.99"
			}
		}
	},
	'5555557777': {
		name: "Michael Chen",
		address: "4321 Cedar Road, San Francisco, CA 94101",
		customerID: "R004",
		email: "michael.chen@example.com",
		phone: "555-555-7777",
		recipient: "Sophia Lee",
		orderHistory: {
			'OH1': {
				itemName: "Product I",
				tranDate: "2022-09-15",
				amount: "$39.99"
			},
			'OH2': {
				itemName: "Service J",
				tranDate: "2023-03-05",
				amount: "$69.99"
			}
		}
	}
};
