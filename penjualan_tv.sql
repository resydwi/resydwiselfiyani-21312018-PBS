-- Membuat tabel Customers
CREATE TABLE Customers (
    CustomerID INT PRIMARY KEY,
    NAME VARCHAR(50),
    Email VARCHAR(100)
);

-- Membuat tabel Products
CREATE TABLE Products (
    ProductID INT PRIMARY KEY,
    NAME VARCHAR(50),
    Price DECIMAL(10, 2)
);

-- Membuat tabel Sales
CREATE TABLE Sales (
    SaleID INT PRIMARY KEY,
    CustomerID INT,
    ProductID INT,
    SaleDate DATE,
    Quantity INT,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID),
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);

-- Menyisipkan data ke dalam tabel Customers
INSERT INTO Customers (CustomerID, NAME, Email) VALUES
(1, 'rere', 'rere@example.com'),
(2, 'lee jae wook', 'jaewook@example.com');

-- Menyisipkan data ke dalam tabel Products
INSERT INTO Products (ProductID, NAME, Price) VALUES
(101, 'Smart TV 50 inch', 500.00),
(102, 'LED TV 40 inch', 400.00);

-- Menyisipkan data ke dalam tabel Sales
INSERT INTO Sales (SaleID, CustomerID, ProductID, SaleDate, Quantity) VALUES
(1, 1, 101, '2024-04-01', 2),
(2, 2, 102, '2024-04-02', 1),
(3, 1, 102, '2024-04-03', 3);