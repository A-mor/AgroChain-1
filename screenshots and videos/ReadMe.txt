Summuary : 

	SUCCEEDED CHALLENGES : 

		*Bursting the Interface according to the user
		*QRCode Generator
		*QRCode Reader
	BONUS :
		*Funding Farmer with Ethers from Ganache accounts' Balance

****************************************

In order to imrove the main AgroChain Dapp cloned from https://github.com/Kerala-Blockchain-Academy/AgroChain, we have 

# Defined the accessible functionalities according to the type of the connected Account - Added QRCode API : 
    *Farmer : 
        Signing up and generating/Downloading a QRCode Containing his credentials.
    *Tester : 
        Getting Farmer credentials by Farmer ID .
        Adding Lots Infos to Farmers.
        Generating/Downloading QRCode containing Farmer and Lot Credentials.
        Funding a Farmer by transferring to him Ethers from his own Ganache Wallet.
    *Customer : 
        Getting Farmer and/or Lot credentials by Scanning QRCode.
        Getting Farmer and/or Lot credentials by Farmer ID and/or Lot Number.
        Funding a Farmer by transferring to him Ethers from his own Ganache Wallet.
    *Supplier : 
        Supposed to be able to add Check-in date to a Lot Number correspending to a Farmer ID [Could not be implemented].
        Funding a Farmer by transferring to him Ethers from his own Ganache Wallet.


# Still to improve : 
    In the end of file app.js - web3.eth.getAccounts function :
        There is a switch statment defining statically the role of the connected accounts - you should change the selected addresses    depending on your Ganache accounts (addresses should be given in lowercase) so that you can use the app.

    When Connecting with an unkown account, you should select your role, then you can access to the needed functionalities only.
    Unknown addresses should be stored in a mapping struct [key = address => Value = role].
    
    The "default:" part of the switch statement refers to the unknown accounts.

    That switch should use the addresses and roles  of the mapping mentioned above to ensure accuracy.


# The code is well-commented and the photos/videos in the screenshots folder describes the scenarios very well.