USE [master]
GO
/****** Object:  Database [bikerdb]    Script Date: 17-1-2021 17:10:35 ******/
CREATE DATABASE [bikerdb]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'bikerdb', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.SQLEXPRESS\MSSQL\DATA\bikerdb.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'bikerdb_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.SQLEXPRESS\MSSQL\DATA\bikerdb_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [bikerdb] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [bikerdb].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [bikerdb] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [bikerdb] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [bikerdb] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [bikerdb] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [bikerdb] SET ARITHABORT OFF 
GO
ALTER DATABASE [bikerdb] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [bikerdb] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [bikerdb] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [bikerdb] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [bikerdb] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [bikerdb] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [bikerdb] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [bikerdb] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [bikerdb] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [bikerdb] SET  DISABLE_BROKER 
GO
ALTER DATABASE [bikerdb] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [bikerdb] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [bikerdb] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [bikerdb] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [bikerdb] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [bikerdb] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [bikerdb] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [bikerdb] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [bikerdb] SET  MULTI_USER 
GO
ALTER DATABASE [bikerdb] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [bikerdb] SET DB_CHAINING OFF 
GO
ALTER DATABASE [bikerdb] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [bikerdb] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [bikerdb] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [bikerdb] SET QUERY_STORE = OFF
GO
USE [bikerdb]
GO
/****** Object:  User [biker]    Script Date: 17-1-2021 17:10:35 ******/
CREATE USER [biker] FOR LOGIN [biker] WITH DEFAULT_SCHEMA=[db_accessadmin]
GO
/****** Object:  Table [dbo].[accessoires]    Script Date: 17-1-2021 17:10:35 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[accessoires](
	[accessoireid] [float] NOT NULL,
	[item] [nvarchar](max) NOT NULL,
	[dagprijs] [nvarchar](max) NOT NULL,
	[nieuwprijs] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_accessoires] PRIMARY KEY CLUSTERED 
(
	[accessoireid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[fietsen]    Script Date: 17-1-2021 17:10:35 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[fietsen](
	[fietsid] [float] NOT NULL,
	[fiets] [nvarchar](max) NULL,
	[dagprijs] [nvarchar](max) NULL,
	[nieuwprijs] [nvarchar](max) NULL,
 CONSTRAINT [PK_fietsen] PRIMARY KEY CLUSTERED 
(
	[fietsid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[klanten]    Script Date: 17-1-2021 17:10:35 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[klanten](
	[klantenid] [float] NOT NULL,
	[firstname] [nvarchar](max) NOT NULL,
	[lastname] [nvarchar](max) NOT NULL,
	[gender] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_klanten] PRIMARY KEY CLUSTERED 
(
	[klantenid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[medewerkers]    Script Date: 17-1-2021 17:10:35 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[medewerkers](
	[medewerkersid] [float] NULL,
	[firstname] [nvarchar](max) NULL,
	[lastname] [nvarchar](max) NULL,
	[gender] [nvarchar](max) NULL,
	[functie] [nvarchar](max) NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
INSERT [dbo].[accessoires] ([accessoireid], [item], [dagprijs], [nieuwprijs]) VALUES (1, N'Helm', N'€2.50', N'€50.00')
INSERT [dbo].[accessoires] ([accessoireid], [item], [dagprijs], [nieuwprijs]) VALUES (2, N'Fietstas', N'€2.00', N'€9.99')
INSERT [dbo].[accessoires] ([accessoireid], [item], [dagprijs], [nieuwprijs]) VALUES (3, N'Voorlicht', N'€0.99', N'€7.50')
INSERT [dbo].[accessoires] ([accessoireid], [item], [dagprijs], [nieuwprijs]) VALUES (4, N'Achterlicht', N'€0.99', N'€7.50')
INSERT [dbo].[accessoires] ([accessoireid], [item], [dagprijs], [nieuwprijs]) VALUES (5, N'Fietsbel', N'€0.50', N'€5.00')
GO
INSERT [dbo].[fietsen] ([fietsid], [fiets], [dagprijs], [nieuwprijs]) VALUES (1, N'Herenfiets', N'€10.00', N'€250.00')
INSERT [dbo].[fietsen] ([fietsid], [fiets], [dagprijs], [nieuwprijs]) VALUES (2, N'Damesfiets', N'€10.00', N'€199.99')
INSERT [dbo].[fietsen] ([fietsid], [fiets], [dagprijs], [nieuwprijs]) VALUES (3, N'Mountainbike', N'€15.00', N'€325.00')
INSERT [dbo].[fietsen] ([fietsid], [fiets], [dagprijs], [nieuwprijs]) VALUES (4, N'Kinderfiets', N'€2,99', N'€75.00')
INSERT [dbo].[fietsen] ([fietsid], [fiets], [dagprijs], [nieuwprijs]) VALUES (5, N'Racefiets', N'€25.00', N'€5000.00')
GO
INSERT [dbo].[klanten] ([klantenid], [firstname], [lastname], [gender]) VALUES (1, N'Bas', N'Mensinga', N'Man')
INSERT [dbo].[klanten] ([klantenid], [firstname], [lastname], [gender]) VALUES (2, N'Dylan', N'Meyer', N'Man')
INSERT [dbo].[klanten] ([klantenid], [firstname], [lastname], [gender]) VALUES (3, N'Stiven', N'Maneul', N'Man')
INSERT [dbo].[klanten] ([klantenid], [firstname], [lastname], [gender]) VALUES (4, N'Tim', N'Koorevaar', N'Man')
INSERT [dbo].[klanten] ([klantenid], [firstname], [lastname], [gender]) VALUES (5, N'Niel', N'Klomp', N'Vrouw')
GO
INSERT [dbo].[medewerkers] ([medewerkersid], [firstname], [lastname], [gender], [functie]) VALUES (1, N'Gerard', N'de Jong', N'M', N'Reperateur')
INSERT [dbo].[medewerkers] ([medewerkersid], [firstname], [lastname], [gender], [functie]) VALUES (2, N'Marieke', N'de Vries', N'V', N'Verkoopster')
INSERT [dbo].[medewerkers] ([medewerkersid], [firstname], [lastname], [gender], [functie]) VALUES (3, N'Hans', N'Dijkstra', N'M', N'Verkoper')
INSERT [dbo].[medewerkers] ([medewerkersid], [firstname], [lastname], [gender], [functie]) VALUES (4, N'Lindsey', N'Barron', N'V', N'Baliemedewerker')
INSERT [dbo].[medewerkers] ([medewerkersid], [firstname], [lastname], [gender], [functie]) VALUES (5, N'Daniëlle', N'de Vrije', N'V', N'Baliemedewerker')
GO
USE [master]
GO
ALTER DATABASE [bikerdb] SET  READ_WRITE 
GO
