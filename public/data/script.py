import csv
all_ids = []
with open("/Users/aaronwalker/Documents/third-try/vr-viz-boilerplate/public/data/prismMapData.csv", 'r') as file:
    csvreader = csv.reader(file)
    header = next(csvreader)
    for row in csvreader:
        all_ids.append(row[0])

existing_ids = []
with open("/Users/aaronwalker/Documents/third-try/vr-viz-boilerplate/public/data/test.csv", 'r') as file:
    csvreader = csv.reader(file)
    header = next(csvreader)
    for row in csvreader:
        existing_ids.append(row[0])
missing_ids = [id for id in all_ids if id not in existing_ids]
print(missing_ids)