/** The await keyword blocks all JS code execution in an app until the awaited Promise is returned. T or F ? */

// False
/** REASON
 * 'await' keyword only blocks execution of code inside the specific async function containing the await keyword.
 * 
 * Splitting Execution Flow
 * : The caller of the await's async function can continue with execution while awaiting the async functions resolution.
 */