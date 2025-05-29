import { Document, Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import React from 'react';
import afrismLogo from '../assets/images/afrism-logoTechnology.png?inline'; // Assurez-vous que le chemin est correct

// Palette de couleurs adaptée à AFRISM (basée sur le logo bleu)
const COLORS = {
    primary: '#2D65B4', 
    secondary: '#4F46E5',
    accent: '#6366F1',
    lightGray: '#F7FAFC',
    darkGray: '#718096',
    text: '#2D3748',
    gold: '#F2C94C'
}

// Récupération de vos styles originaux (avant les réductions de police)
const styles = StyleSheet.create({
    page: {
        padding: 20, 
        fontFamily: "Helvetica-Bold",
        backgroundColor: '#FFFFFF'
    },
    header: {
        marginBottom: 12, 
        paddingBottom: 8, 
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: `2 solid ${COLORS.primary}`
    },
    headerLeft: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center"
    },
    title: {
        fontSize: 15, // Votre taille originale
        fontWeight: 'black',
        color: COLORS.primary,
        letterSpacing: 1
    },
    subtitle: {
        fontSize: 8, // Votre taille originale
        color: COLORS.darkGray,
        marginTop: 3, 
        letterSpacing: 0.5
    },
    section: {
        marginBottom: 7, // Légèrement réduit pour compenser la nouvelle section
        backgroundColor: COLORS.lightGray,
        borderRadius: 4,
        padding: 7, 
        borderLeftWidth: 4,
        borderLeftColor: COLORS.primary,
        borderLeftStyle: 'solid'
    },
    sectionTitle: {
        fontSize: 11, // Votre taille originale
        fontWeight: 'bold',
        marginBottom: 5, 
        color: COLORS.primary,
        textTransform: 'uppercase',
        letterSpacing: 0.8,
        paddingBottom: 3, 
        borderBottom: `1 solid ${COLORS.primary}`
    },
    row: {
        flexDirection: "row",
        marginBottom: 3, 
        alignItems: 'flex-start'
    },
    column: {
        flex: 1,
        paddingRight: 4, 
        paddingLeft: 4,  
    },
    label: {
        fontSize: 7, // Votre taille originale
        color: COLORS.darkGray,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginBottom: 1 
    },
    value: {
        fontSize: 9, // Votre taille originale
        color: COLORS.text,
        fontWeight: 'semibold', // Maintenu si c'est ce que vous aviez
        lineHeight: 1.3 
    },
    // Styles pour les items (services et frais obligatoires)
    itemRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 3, 
        borderBottomWidth: 0.7, // Fine ligne
        borderBottomColor: '#E2E8F0',
        borderBottomStyle: 'solid',
    },
    itemName: {
        fontSize: 9, // Votre taille originale
        fontFamily: "Helvetica-Bold", // Assumant que vous voulez du gras
        color: COLORS.text
    },
    itemPrice: {
        fontSize: 9, // Votre taille originale
        fontFamily: "Helvetica-Bold", // Assumant que vous voulez du gras
        color: COLORS.primary
    },
    totalRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 6, 
        paddingTop: 5, 
        borderTopWidth: 1.5, 
        borderTopColor: COLORS.primary,
        borderTopStyle: 'solid'
    },
    totalLabel: {
        fontSize: 9, // Votre taille originale
        fontFamily: "Helvetica-Bold",
        color: COLORS.text
    },
    totalValue: {
        fontSize: 9, // Votre taille originale
        fontFamily: "Helvetica-Bold",
        color: COLORS.primary
    },
    signatureSection: {
        marginTop: 12, // Légèrement réduit pour potentiellement gagner de la place
        paddingTop: 8,  
        borderTopWidth: 1, 
        borderTopColor: COLORS.darkGray,
        borderTopStyle: 'dashed'
    },
    signatureLabel: { 
        fontSize: 8, // Votre taille originale
        color: COLORS.darkGray,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginBottom: 2,
        textAlign: 'center'
    },
    signatureBox: {
        height: 28, 
        width: '90%',
        borderBottomWidth: 1,
        borderBottomColor: COLORS.darkGray,
        borderBottomStyle: 'solid',
        marginTop: 4, 
        alignSelf: 'center'
    },
    footer: { 
        position: "absolute",
        bottom: 10, 
        left: 20,
        right: 20,
        textAlign: "center",
        fontSize: 6, // Votre taille originale
        color: COLORS.darkGray,
        paddingVertical: 5, 
        borderTopWidth: 0.5,
        borderTopColor: COLORS.lightGray,
        borderTopStyle: 'solid',
        backgroundColor: '#FFFFFF'
    },
    logo: {
        width: 70,  
        height: 70, 
        marginRight: 8, 
        objectFit: 'contain'
    },
    watermark: { 
        position: 'absolute',
        opacity: 0.08,
        fontSize: 38,
        color: COLORS.primary,
        transform: 'rotate(-45deg)',
        left: '30%',
        top: '50%',
        transformOrigin: 'center center'
    },
    referenceBox: { 
        position: 'absolute',
        bottom: 45, // Ajusté légèrement pour s'assurer qu'il ne touche pas le footer
        right: 20,
        padding: 6, 
        borderWidth: 1,
        borderColor: COLORS.primary,
        borderStyle: 'dashed',
        borderRadius: 5,
        width: 130, 
        backgroundColor: COLORS.lightGray
    },
    referenceTitle: {
        fontSize: 7, // Votre taille originale
        textAlign: 'center',
        fontWeight: 'bold',
        color: COLORS.primary,
        marginBottom: 3 
    },
    referenceCode: {
        fontSize: 11, // Votre taille originale
        textAlign: 'center',
        fontWeight: 'bold',
        color: COLORS.text,
        marginBottom: 3 
    },
    referenceNote: {
        fontSize: 5, // Votre taille originale
        textAlign: 'center',
        color: COLORS.darkGray
    },
    slogan: {
        fontSize: 5, // Votre taille originale
        fontStyle: 'italic', // Assurez-vous que la police supporte l'italique ou utilisez Helvetica-Oblique
        color: COLORS.darkGray,
        textAlign: 'center',
        marginTop: 2 
    }
});

const formatPrice = (price) => {
    if (price === null || price === undefined || isNaN(Number(price))) {
        return "N/A";
    }
    return Number(price).toLocaleString() + " FCFA";
};

const PDFDocument = ({ formData, mockData }) => {
    const referenceNumber = `ASM-${new Date().getFullYear()}-${Math.random().toString(36).substr(2, 6).toUpperCase()}`;
    
    const obligatoryFeesList = mockData?.obligatoryFees || [];
    const additionalServicesList = mockData?.additionalServices || [];

    const totalAdditionalServicesCost = formData.selectedServices.reduce((total, serviceId) => {
        const service = additionalServicesList.find(s => s.id === serviceId);
        return total + (Number(service?.price) || 0);
    }, 0);

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <Text style={styles.watermark}>African Sputnik Moment</Text>

                <View style={styles.header}>
                    <View style={styles.headerLeft}>
                        <Image src={afrismLogo} style={styles.logo} />
                        <View>
                            <Text style={styles.title}>FICHE D'INSCRIPTION BOURSE D'ETUDE EN RUSSIE</Text>
                            <Text style={styles.subtitle}>DOCUMENT OFFICIEL - N°REF: {referenceNumber}</Text>
                            <Text style={styles.slogan}>Every child is a genius</Text>
                        </View>
                    </View>
                </View>

                {/* Profil de l'Étudiant */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Profil de l'Étudiant</Text>
                    {/* ... Contenu Profil ... */}
                    <View style={styles.row}>
                        <View style={styles.column}><Text style={styles.label}>Identité</Text><Text style={styles.value}>{formData.firstName} {formData.lastName}</Text></View>
                        <View style={styles.column}><Text style={styles.label}>Date/Lieu de Naissance</Text><Text style={styles.value}>{formData.birthDate || 'N/A'} - {formData.birthPlace || 'N/A'}</Text></View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.column}><Text style={styles.label}>Contacts</Text><Text style={styles.value}>{formData.email || 'N/A'}</Text><Text style={styles.value}>{formData.phone || 'N/A'}</Text></View>
                        <View style={styles.column}><Text style={styles.label}>Responsable Légal</Text><Text style={styles.value}>{formData.parentName || 'N/A'}</Text><Text style={styles.value}>{formData.parentContact || 'N/A'}</Text></View>
                    </View>
                </View>
                
                {/* Détails du Programme */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Détails du Programme</Text>
                    {/* ... Contenu Programme ... */}
                     <View style={styles.row}>
                        <View style={styles.column}><Text style={styles.label}>Destination</Text><Text style={styles.value}>{formData.country || 'N/A'}</Text></View>
                        <View style={styles.column}><Text style={styles.label}>Établissement</Text><Text style={styles.value}>{formData.university || 'N/A'}</Text></View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.column}><Text style={styles.label}>Domaine d'Études</Text><Text style={styles.value}>{formData.field || 'N/A'}</Text></View>
                        <View style={styles.column}><Text style={styles.label}>Niveau Académique</Text><Text style={styles.value}>{formData.level || 'N/A'}</Text></View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.column}><Text style={styles.label}>Frais de Scolarité</Text><Text style={styles.value}>{formatPrice(formData.tuitionFee)}</Text></View>
                        <View style={styles.column}></View>
                    </View>
                </View>

                {/* Détails du Logement */}
                {formData.accommodation && (
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Détails du Logement</Text>
                        {/* ... Contenu Logement ... */}
                        <View style={styles.row}>
                            <View style={styles.column}>
                                <Text style={styles.value}>{formData.accommodation.type || "Non spécifié"}</Text>
                                {formData.accommodation.capacity && <Text style={[styles.label, {marginTop: 2}]}>Capacité: {formData.accommodation.capacity}</Text>}
                            </View>
                            <View style={styles.column}>
                                <Text style={styles.label}>Coût Mensuel Estimé</Text>
                                <Text style={[styles.value, {color: COLORS.primary}]}>{formatPrice(formData.accommodation.price)}</Text>
                            </View>
                        </View>
                    </View>
                )}

                {/* NOUVELLE SECTION : Frais de Dossier Obligatoires */}
                {obligatoryFeesList.length > 0 && (
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Frais de Dossier (Obligatoire)</Text>
                        {obligatoryFeesList.map((fee, index) => (
                            <View key={fee.id || `obr-fee-${index}`} style={styles.itemRow}>
                                <Text style={styles.itemName}>{fee.name}</Text>
                                <Text style={styles.itemPrice}>{formatPrice(fee.price)}</Text>
                            </View>
                        ))}
                    </View>
                )}

                {/* Services Additionnels */}
                {(formData.selectedServices?.length > 0 && additionalServicesList.length > 0) && (
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Services Additionnels</Text>
                        {formData.selectedServices.map((serviceId, index) => {
                            const service = additionalServicesList.find((s) => s.id === serviceId);
                            if (!service) return null; 
                            return (
                                <View key={service.id || `add-serv-${index}`} style={styles.itemRow}>
                                    <Text style={styles.itemName}>{service.name}</Text>
                                    <Text style={styles.itemPrice}>{formatPrice(service.price)}</Text>
                                </View>
                            );
                        })}
                        {formData.selectedServices?.length > 0 && (
                            <View style={styles.totalRow}>
                                <Text style={styles.totalLabel}>Total Services Additionnels</Text>
                                <Text style={styles.totalValue}>{formatPrice(totalAdditionalServicesCost)}</Text>
                            </View>
                        )}
                    </View>
                )}

                {/* Référence unique */}
                <View style={styles.referenceBox}> 
                    <Text style={styles.referenceTitle}>CODE DE RÉFÉRENCE</Text>
                    <Text style={styles.referenceCode}>{referenceNumber}</Text>
                    <Text style={styles.referenceNote}>À conserver pour démarche</Text>
                </View>

                {/* Signature */}
                <View style={styles.signatureSection}>
                    <Text style={[styles.label, {marginBottom: 7, textAlign: 'center', fontSize: 8, fontFamily: "Helvetica"}]}>
                        Déclaration sur l'honneur - Je certifie l'exactitude des informations fournies.
                    </Text>
                     <View style={[styles.row, { justifyContent: 'space-around', marginBottom: 8 }]}>
                        <Text style={styles.signatureLabel}>Fait à ____________________</Text>
                        <Text style={styles.signatureLabel}>Le {new Date().toLocaleDateString('fr-FR')}</Text>
                    </View>
                    <View style={[styles.row, { alignItems: 'flex-start'}]}>
                        <View style={styles.column}><Text style={styles.signatureLabel}>Signature de l'Étudiant</Text><View style={styles.signatureBox} /></View>
                        <View style={styles.column}><Text style={styles.signatureLabel}>Cachet & Signature AFRISM</Text><View style={styles.signatureBox} /></View>
                    </View>
                </View>

                <View style={styles.footer}>
                    <Text>AFRISM • Educational Technology • info@afrism.org • +237 690 205 036 / +86 135 0300 6902</Text>
                    <Text>Imprimé le {new Date().toLocaleDateString('fr-FR')} • Every child is a genius • Document protégé</Text>
                </View>
            </Page>
        </Document>
    );
};

export default PDFDocument;