# Data Cleaning
https://careerfoundry.com/en/blog/data-analytics/best-data-cleaning-tools/
https://blog.hubspot.com/website/data-cleansing

## Data Cleaning Process..Main Tasks
1. Getting rid of unwanted observations
```
  removing observations that aren't relevant to the problem you are trying to solve
```

2. Unifying the data structure
```
  Ensure data from different sources is consistent by mapping it to a unified underlying structure
```

3. Standardizing your data
```
  This involves things like ensuring the numerical observations in your dataset use the same unit of measurement
```

4. Removing unwanted outliers
```
  Outliers can be useful, but if they're erroneous the result will be wrong values. Make a judgement to keep and remove outliers
```

5. Fixing cross-set data errors
```
  Ensuring relationships between datas so that data sources don't contradict each other
```

6. Resolving type conversion and syntax errors.
```
  removing whitespace, checking for spelling mistakes, or simply ensuring data is categorized correctly
```

7. Dealing with missing data
```
  How to deal with missing data?
  remove assicoated entries, guess missing values, or simply flag them so you can measure their impact later on
```

8. Validating your data
```
  Final step of the process. It usually involves executing scripts that check if you've carried out all the other steps of the process correctly.
  You will often have to go back and repeat some of the earlier steps.
```

## What is data cleaning? (also known as data scrubbing)
Is the process of modifying or removing data that's inaccurate, duplicate, incomplete, incorrectly formatted, or corrupted within a dataset.

Ultimate goal of data cleaning is to make a dataset as `accurate` as possible.
* fixing spelling, syntax errors, identifying and deleting duplicate data points, correcting mistakes like mislabelled or empty fields, and standardizing how data is entered or combined from multiple sources.

## Why is data cleaning important?
It will ensure you have data of the `highest quality`.

Not only `prevent errors`, `increase productivity`, and `improve data analysis` and `diceision making`

Without cleaning data first, the dataset is more likely to be inaccurate, unorganized, and incomplete. It will cuase data analysis be more difficult, less clear, and less accurate.

## How to clean data?
```
1. Remove duplicate contacts
2. Correct structural errors
3. Address missing data
4. Keep your data fresh
5. Standardize data entry
```
### 1. Remove duplicate contacts
`Duplicates` are cuased by two things.

1. Inconsistent data entry
2. Multiple channels that capture contact information 

```
De-Duplication
1. Use a de-duplcator such as `Dedupley`
2. Use data validation tools such as `email verification tools_Experian Data Quality`
3. Keep your core tools in sync to eliminate the need for entering the same data into different tools
```

### 2. Correct structural errors
`Structural errors` refer to typos, unusal naming conventions, inconsistent abbreviation, capitalization, or punctuation, and other errors that usually result from manual data entry and lack of standardization.

### 3. Address missing data
Missing data is inevitable.
```
  Tackle missing data
  1. Remove the entries that have missing values
  2. Input missing values based on other information in the dataset
  3. Flag the data as missing
  These solutions are not perfect, but they will help to minimize the negative impact on your data analysis
```

### 4. Keep your data fresh
A few tactics to keep you rdata fresh
```
  using parsing tools
  - scan all incoming emails and update contact information as it comes to hand
```

### 5. Standardize data entry
Create rules dictating whether values should be all lowercase or uppercase, numerical data, etc.
These simple tactics will make you sure you have a much cleaner and more organized contacts database

Important. Don't forget to `bidirectionally sync the data between key business applications`: minimize manual data entry and ensures you're always looking at the most up-to-date, accurate information
