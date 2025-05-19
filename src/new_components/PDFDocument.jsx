import { Document, Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import React from 'react';
import afrismLogo from '../assets/images/afrism-logo.png?inline'; // Assurez-vous que le chemin est correct

// Palette de couleurs adaptée à AFRISM (basée sur le logo bleu)
const COLORS = {
    primary: '#2D65B4', // Bleu AFRISM
    secondary: '#4F46E5',
    accent: '#6366F1',
    lightGray: '#F7FAFC',
    darkGray: '#718096',
    text: '#2D3748',
    gold: '#F2C94C'  // Pour les éléments accentués
}

const styles = StyleSheet.create({
    page: {
        padding: 20,
        fontFamily: "Helvetica-Bold",
        backgroundColor: '#FFFFFF'
    },
    header: {
        marginBottom: 15,
        paddingBottom: 10,
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
        fontSize: 16,
        fontWeight: 'black',
        color: COLORS.primary,
        letterSpacing: 1
    },
    subtitle: {
        fontSize: 9,
        color: COLORS.darkGray,
        marginTop: 4,
        letterSpacing: 0.5
    },
    section: {
        marginBottom: 10,
        backgroundColor: COLORS.lightGray,
        borderRadius: 4,
        padding: 8,
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
        borderLeftWidth: 4,
        borderLeftColor: COLORS.primary,
        borderLeftStyle: 'solid'
    },
    sectionTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 6,
        color: COLORS.primary,
        textTransform: 'uppercase',
        letterSpacing: 0.8,
        paddingBottom: 4,
        borderBottom: `1 solid ${COLORS.primary}`
    },
    row: {
        flexDirection: "row",
        marginBottom: 4,
        alignItems: 'flex-start'
    },
    column: {
        flex: 1,
        paddingRight: 10
    },
    label: {
        fontSize: 8,
        color: COLORS.darkGray,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginBottom: 2
    },
    value: {
        fontSize: 10,
        color: COLORS.text,
        fontWeight: 'semibold'
    },
    serviceRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 4,
        borderBottom: `1 solid ${COLORS.lightGray}`
    },
    serviceName: {
        fontSize: 10,
        fontWeight: 'bold',
        color: COLORS.text
    },
    servicePrice: {
        fontSize: 10,
        fontWeight: 'bold',
        color: COLORS.primary
    },
    totalRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 8,
        paddingTop: 6,
        borderTop: `2 solid ${COLORS.primary}`
    },
    totalLabel: {
        fontSize: 10,
        fontWeight: 'bold',
        color: COLORS.text
    },
    totalValue: {
        fontSize: 10,
        fontWeight: 'bold',
        color: COLORS.primary
    },
    signatureSection: {
        marginTop: 20,
        paddingTop: 10,
        borderTop: `2 dashed ${COLORS.darkGray}`
    },
    signatureBox: {
        height: 30,
        width: 200,
        borderBottom: `1 solid ${COLORS.darkGray}`,
        marginTop: 5
    },
    footer: {
        position: "absolute",
        bottom: 25,
        left: 40,
        right: 40,
        textAlign: "center",
        fontSize: 7,
        color: COLORS.darkGray,
        paddingVertical: 8,
        borderTop: `1 solid ${COLORS.lightGray}`,
        backgroundColor: '#FFFFFF'
    },
    logo: {
        width: 50,
        height: 50,
        marginRight: 10,
        objectFit: 'contain'
    },
    watermark: {
        position: 'absolute',
        opacity: 0.1,
        fontSize: 40,
        color: COLORS.primary,
        transform: 'rotate(-45deg)',
        left: 150,
        top: 400
    },
    referenceBox: {
        position: 'absolute',
        bottom: 60,
        right: 40,
        padding: 10,
        borderWidth: 2,
        borderColor: COLORS.primary,
        borderStyle: 'dashed',
        borderRadius: 5,
        width: 150,
        backgroundColor: COLORS.lightGray
    },
    referenceTitle: {
        fontSize: 8,
        textAlign: 'center',
        fontWeight: 'bold',
        color: COLORS.primary,
        marginBottom: 4
    },
    referenceCode: {
        fontSize: 12,
        textAlign: 'center',
        fontWeight: 'bold',
        color: COLORS.text,
        marginBottom: 4
    },
    referenceNote: {
        fontSize: 6,
        textAlign: 'center',
        color: COLORS.darkGray
    },
    cornerDecoration: {
        position: 'absolute',
        width: 40,
        height: 40,
        borderColor: COLORS.primary,
        borderWidth: 2
    },
    topLeftCorner: {
        top: 20,
        left: 20,
        borderTopWidth: 2,
        borderLeftWidth: 2,
        borderBottomWidth: 0,
        borderRightWidth: 0
    },
    topRightCorner: {
        top: 20,
        right: 20,
        borderTopWidth: 2,
        borderRightWidth: 2,
        borderBottomWidth: 0,
        borderLeftWidth: 0
    },
    bottomLeftCorner: {
        bottom: 20,
        left: 20,
        borderBottomWidth: 2,
        borderLeftWidth: 2,
        borderTopWidth: 0,
        borderRightWidth: 0
    },
    bottomRightCorner: {
        bottom: 20,
        right: 20,
        borderBottomWidth: 2,
        borderRightWidth: 2,
        borderTopWidth: 0,
        borderLeftWidth: 0
    },
    slogan: {
        fontSize: 6,
        fontStyle: 'italic',
        color: COLORS.darkGray,
        textAlign: 'center',
        marginTop: 2
    }
});

const PDFDocument = ({ formData, mockData }) => {
    // Créer une référence unique
    const referenceNumber = `ASM-${new Date().getFullYear()}-${Math.random().toString(36).substr(2, 6).toUpperCase()}`;
    
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                {/* Éléments décoratifs */}
                <View style={[styles.cornerDecoration, styles.topLeftCorner]} />
                <View style={[styles.cornerDecoration, styles.topRightCorner]} />
                <View style={[styles.cornerDecoration, styles.bottomLeftCorner]} />
                <View style={[styles.cornerDecoration, styles.bottomRightCorner]} />
                
                {/* Filigrane */}
                <Text style={styles.watermark}>African Sputnik Moment</Text>

                {/* En-tête */}
                <View style={styles.header}>
                    <View style={styles.headerLeft}>
                        <Image 
                            src={afrismLogo} 
                            style={styles.logo}
                        />
                        <View>
                            <Text style={styles.title}>FICHE D'INSCRIPTION BOURSE D'ETUDE EN RUSSIE</Text>
                            <Text style={styles.subtitle}>DOCUMENT OFFICIEL - N°REF: {referenceNumber}</Text>
                            <Text style={styles.slogan}>Every child is a genius</Text>
                        </View>
                    </View>
                </View>

                {/* Sections améliorées */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Profil de l'Étudiant</Text>
                    <View style={styles.row}>
                        <View style={styles.column}>
                            <Text style={styles.label}>Identité</Text>
                            <Text style={styles.value}>{formData.firstName} {formData.lastName}</Text>
                        </View>
                        <View style={styles.column}>
                            <Text style={styles.label}>Date/Lieu de Naissance</Text>
                            <Text style={styles.value}>{formData.birthDate} - {formData.birthPlace}</Text>
                        </View>
                    </View>

                    <View style={styles.row}>
                        <View style={styles.column}>
                            <Text style={styles.label}>Contacts</Text>
                            <Text style={styles.value}>{formData.email}</Text>
                            <Text style={styles.value}>{formData.phone}</Text>
                        </View>
                        <View style={styles.column}>
                            <Text style={styles.label}>Responsable Légal</Text>
                            <Text style={styles.value}>{formData.parentName}</Text>
                            <Text style={styles.value}>{formData.parentContact}</Text>
                        </View>
                    </View>
                </View>
                
                {/* Section Programme */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Détails du Programme</Text>
                    <View style={styles.row}>
                        <View style={styles.column}>
                            <Text style={styles.label}>Destination</Text>
                            <Text style={styles.value}>{formData.country}</Text>
                        </View>
                        <View style={styles.column}>
                            <Text style={styles.label}>Établissement</Text>
                            <Text style={styles.value}>{formData.university}</Text>
                        </View>
                    </View>

                    <View style={styles.row}>
                        <View style={styles.column}>
                            <Text style={styles.label}>Domaine d'Études</Text>
                            <Text style={styles.value}>{formData.field}</Text>
                        </View>
                        <View style={styles.column}>
                            <Text style={styles.label}>Niveau Académique</Text>
                            <Text style={styles.value}>{formData.level}</Text>
                        </View>
                    </View>

                    {/* Frais de Scolarité inclus dans Programme */}
                    <View style={styles.row}>
                        <View style={styles.column}>
                            <Text style={styles.label}>Frais de Scolarité</Text>
                            <Text style={styles.value}>
                                {formData.tuitionFee ? formData.tuitionFee.toLocaleString() : "Non renseigné"} FCFA
                            </Text>
                        </View>
                    </View>
                </View>

                {/* Section Hébergement */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Détails du Logement</Text>
                    <View style={styles.row}>
                        <View style={styles.column}>
                            <Text style={styles.value}>{formData.accommodation?.type}</Text>
                            <Text style={[styles.label, {marginTop: 5}]}>Capacité: {formData.accommodation?.capacity}</Text>
                        </View>
                        <View style={styles.column}>
                            <Text style={styles.label}>Coût Mensuel</Text>
                            <Text style={[styles.value, {color: COLORS.primary}]}>
                                {formData.accommodation?.price?.toLocaleString()} FCFA
                            </Text>
                        </View>
                    </View>
                </View>

                {/* Section Services */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Services Additionnels</Text>
                    {formData.selectedServices?.length > 0 ? (
                        <>
                            {formData.selectedServices.map((serviceId, index) => {
                                const service = mockData.additionalServices.find((s) => s.id === serviceId);
                                return (
                                    <View key={index} style={styles.serviceRow}>
                                        <Text style={styles.serviceName}>{service?.name}</Text>
                                        <Text style={styles.servicePrice}>{service?.price?.toLocaleString()} FCFA</Text>
                                    </View>
                                );
                            })}
                            <View style={styles.totalRow}>
                                <Text style={styles.totalLabel}>Total Services</Text>
                                <Text style={[styles.totalValue, {color: COLORS.primary}]}>
                                    {formData.selectedServices
                                        .reduce((total, serviceId) => total +
                                            (mockData.additionalServices.find(s => s.id === serviceId)?.price || 0), 0)
                                        .toLocaleString()} FCFA
                                </Text>
                            </View>
                        </>
                    ) : (
                        <Text style={[styles.value, {color: COLORS.darkGray}]}>Aucun service supplémentaire sélectionné</Text>
                    )}
                </View>

                {/* Référence unique */}
                <View style={styles.referenceBox}>
                    <Text style={styles.referenceTitle}>CODE DE RÉFÉRENCE</Text>
                    <Text style={styles.referenceCode}>{referenceNumber}</Text>
                    <Text style={styles.referenceNote}>À conserver pour toute démarche administrative</Text>
                </View>

                {/* Signature */}
                <View style={styles.signatureSection}>
                    <Text style={[styles.label, {marginBottom: 15}]}>
                        Déclaration sur l'honneur - Je certifie l'exactitude des informations fournies.
                    </Text>
                    <View style={styles.row}>
                        <View style={styles.column}>
                            <Text style={styles.label}>Fait à ____________________</Text>
                            <Text style={styles.label}>Le {new Date().toLocaleDateString()}</Text>
                        </View>
                        <View style={styles.column}>
                            <Text style={styles.label}>Signature de l'étudiant</Text>
                            <View style={styles.signatureBox} />
                        </View>
                    </View>
                </View>

                {/* Pied de page */}
                <View style={styles.footer}>
                    <Text>AFRISM • Educational Machinery • info@afrism.org • +237 690 205 036  / +86 135 0300 6902 </Text>
                    <Text>Imprimé le {new Date().toLocaleDateString()} • Every child is a genius • Document protégé</Text>
                </View>
            </Page>
        </Document>
    );
};

export default PDFDocument;