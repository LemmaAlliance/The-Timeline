let items = [{"id":"Jan 28 2010 00:00:00", "element":"myElement"}, {"id":"Jan 30 2010 00:00:00", "element":"myElement2"}];
let dates = [];

dates.push({"date":new Date(items[0].id), "element":items[0]});
for (var i = 0; i < items.length; i++) {
    dates.push({"date":new Date(items[i].id), "element":items[i]});
    console.log(`Item ${i}'s date is: ${dates[0].date}`);
    //Do something
}