/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
// use('mongodbVSCodePlaygroundDB');
use('Cluster0');
db.createCollection('History');
db.getCollection('History').insertMany([
    {
        'name': 'John',
        'email': 'john@gmail.com',
        'day': new Date(2023-7-5),
        'pages': 10,
        'printer': 'H6-Printer1'
    },
    {
        'name': 'Taylor',
        'email': 'taylor@gmail.com',
        'day': new Date(2023-8-12),
        'pages': 11,
        'printer': 'H6-Printer2'
    },
    {
        'name': 'Joe',
        'email': 'joe@gmail.com',
        'day': new Date(2023-8-12),
        'pages': 20,
        'printer': 'H6-Printer2'
    },
    {
        'name': 'Miyuki',
        'email': 'miyuki@gmail.com',
        'day': new Date(2023-7-4),
        'pages': 15,
        'printer': 'H1-Printer3'
    },
    {
        'name': 'Sawamura',
        'email': 'sawamura@gmail.com',
        'day': new Date(2023-7-4),
        'pages': 18,
        'printer': 'H1-Printer3'
    },
    {
        'name': 'Voldy',
        'email': 'voldy@gmail.com',
        'day': new Date(2023-7-7),
        'pages': 1,
        'printer': 'H1-Printer4'
    },
    {
        'name': 'Harry',
        'email': 'harry@gmail.com',
        'day': new Date(2023-8-11),
        'pages': 3,
        'printer': 'H6-Printer2'
    },
    {
        'name': 'Hermione',
        'email': 'hermione@gmail.com',
        'day': new Date(2023-8-11),
        'pages': 49,
        'printer': 'H6-Printer2'
    },
]);

use('Cluster0');
const data = db.getCollection('History').find({});
console.log(data);

// // Insert a few documents into the sales collection.
// db.getCollection('sales').insertMany([
//   { 'item': 'abc', 'price': 10, 'quantity': 2, 'date': new Date('2014-03-01T08:00:00Z') },
//   { 'item': 'jkl', 'price': 20, 'quantity': 1, 'date': new Date('2014-03-01T09:00:00Z') },
//   { 'item': 'xyz', 'price': 5, 'quantity': 10, 'date': new Date('2014-03-15T09:00:00Z') },
//   { 'item': 'xyz', 'price': 5, 'quantity': 20, 'date': new Date('2014-04-04T11:21:39.736Z') },
//   { 'item': 'abc', 'price': 10, 'quantity': 10, 'date': new Date('2014-04-04T21:23:13.331Z') },
//   { 'item': 'def', 'price': 7.5, 'quantity': 5, 'date': new Date('2015-06-04T05:08:13Z') },
//   { 'item': 'def', 'price': 7.5, 'quantity': 10, 'date': new Date('2015-09-10T08:43:00Z') },
//   { 'item': 'abc', 'price': 10, 'quantity': 5, 'date': new Date('2016-02-06T20:20:13Z') },
// ]);

// // Run a find command to view items sold on April 4th, 2014.
// const salesOnApril4th = db.getCollection('sales').find({
//   date: { $gte: new Date('2014-04-04'), $lt: new Date('2014-04-05') }
// }).count();

// // Print a message to the output window.
// console.log(`${salesOnApril4th} sales occurred in 2014.`);

// // Here we run an aggregation and open a cursor to the results.
// // Use '.toArray()' to exhaust the cursor to return the whole result set.
// // You can use '.hasNext()/.next()' to iterate through the cursor page by page.
// db.getCollection('sales').aggregate([
//   // Find all of the sales that occurred in 2014.
//   { $match: { date: { $gte: new Date('2014-01-01'), $lt: new Date('2015-01-01') } } },
//   // Group the total sales for each product.
//   { $group: { _id: '$item', totalSaleAmount: { $sum: { $multiply: [ '$price', '$quantity' ] } } } }
// ]);
